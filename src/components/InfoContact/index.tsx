import React, { useState } from "react";
import styles from "./styles.module.css";

import { CardInfoContact } from "../CardInfoContact";

import map from "../../assets/svg/maps.svg";
import telephone from "../../assets/svg/telephone.svg";
import email from "../../assets/svg/email.svg";
import clock from "../../assets/svg/clock.svg";

export function InfoContact() {
  const [sucesso, setSucesso] = useState(false);
  const [enviando, setEnviando] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEnviando(true);

    const form = e.currentTarget;

    const formData = new FormData(form);
    const searchParams = new URLSearchParams();

    formData.forEach((value, key) => {
      searchParams.append(key, value.toString());
      console.log(key, value); // para debug no console
    });

    const endpoint =
      "https://script.google.com/macros/s/AKfycbx7kqKYx0tjHBjci_YXZmmXAHyB59Kluh1cCEgNqnHQv4b4gCxbvIm4LffXw8unImXH/exec";

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: searchParams.toString(),
      });

      const text = await res.text();

      if (res.ok && text.trim() === "OK") {
        setSucesso(true);
        form.reset();
      } else {
        console.error("Resposta inesperada do servidor:", res.status, text);
        alert("Erro ao enviar formulário.");
      }
    } catch (err) {
      console.error("Erro desconhecido", err);
      alert("Erro de conexão ao enviar formulário.");
    } finally {
      setEnviando(false);
    }
  }

  return (
    <section className={styles.container} id="contact">
      <div className={styles.title}>
        <p>Contato</p>
        <h2>Agende sua Consulta</h2>
      </div>

      <div className={styles.info}>
        <div className={styles.cards}>
          <CardInfoContact
            icon={map}
            title="Endereço"
            description="Av Santo Antônio 223A, Centro"
            info2="Limoeiro/PE - CEP: 55700-000"
          />

          <CardInfoContact
            icon={telephone}
            title="Telefones"
            description="(81) 9966-0979"
            info2="(81) 99666-0979"
          />

          <CardInfoContact icon={email} title="E-mail" description="dradaniela@gmail.com" />

          <CardInfoContact
            icon={clock}
            title="Horário de Atendimento"
            description="Segunda a Sexta: 8h às 17h"
            info2="Sábado: 8h às 13h"
            info3="Atendimento noturno somente por agendamento"
          />
        </div>

        <div className={styles.formWrapper}>
          <h2>Formulário de Agendamento</h2>

          {!sucesso && (
            <>
              <form onSubmit={handleSubmit} className={styles.form}>
                <div>
                  <label htmlFor="nome">Nome:</label>
                  <input type="text" id="nome" name="nome" required placeholder="Digite seu nome" />
                </div>
                <div>
                  <label htmlFor="telefone">Telefone:</label>
                  <input type="tel" id="telefone" name="telefone" required placeholder="Ex: (81) 99999-9999" />
                </div>
                <div>
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" required placeholder="Ex: exemplo@gmail.com" />
                </div>
                <div>
                  <label htmlFor="servico">Serviço:</label>
                  <select id="servico" name="servico" required>
                    <option value="">Selecione um serviço</option>
                    <option value="Odontologia Geral">Odontologia Geral</option>
                    <option value="Ortodontia">Ortodontia (Aparelho)</option>
                    <option value="Endodontia">Endodontia</option>
                    <option value="Prótese">Prótese</option>
                    <option value="Estética">Estética</option>
                    <option value="Odontopediatria">Odontopediatria</option>
                    <option value="Fisioterapia">Fisioterapia</option>
                  </select>
                </div>
                <button type="submit" disabled={enviando}>
                  {enviando ? "Enviando..." : "Enviar"}
                </button>
              </form>
              {enviando && (
                <p className={styles.enviando}>
                  Enviando formulário, aguarde...
                </p>
              )}
            </>
          )}

          {sucesso && (
            <div className={styles.sucesso}>
              <h3>Formulário enviado com sucesso!</h3>
              <p>Em breve entraremos em contato.</p>
              <button onClick={() => setSucesso(false)} style={{ marginTop: "20px" }}>
                Fechar
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
