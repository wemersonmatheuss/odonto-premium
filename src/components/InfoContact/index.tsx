import styles from "./styles.module.css"

import { CardInfoContact } from "../CardInfoContact"


import map from "../../assets/svg/maps.svg"
import telephone from "../../assets/svg/telephone.svg"
import email from "../../assets/svg/email.svg"
import clock from "../../assets/svg/clock.svg"

export function InfoContact() {
    // Função para enviar dados para Google Sheets
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const data = {
            nome: (form.nome as HTMLInputElement).value,
            telefone: (form.telefone as HTMLInputElement).value,
            email: (form.email as HTMLInputElement).value,
            servico: (form.servico as HTMLSelectElement).value,
        };
        // Substitua pela URL do seu Google Apps Script
        const endpoint = "https://script.google.com/macros/s/AKfycbyDAodll0tHQBQFJOJjv2TxeJ9QhknzTHqiIPp020hnBdIia27r6DKAnxpSgb6i3fKj/exec";
        try {
            const res = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            if (res.ok) {
                alert("Formulário enviado com sucesso!");
                form.reset();
            } else {
                alert("Erro ao enviar formulário.");
            }
        } catch (err: unknown) {
                if (typeof err === 'string') {
                 console.error(err);
                } else {
                 console.error('Erro desconhecido', err);
                 }
            }
        }

    return (
        <section className={styles.container}>
            <div className={ styles.title }>
                <p>Contato</p>
                <h2>Agende sua Consulta</h2>
            </div>

            <div className={styles.info}>
                <div className={styles.cards}>
                    <CardInfoContact icon={map} title="Endereço" description="Av Santo Antônio 223A, Centro" info2="Limoeiro/PE - CEP: 55700-000"/>

                    <CardInfoContact icon={telephone} title="Telefones" description="(81) 9966-0979" info2="(81) 99666-0979"/>

                    <CardInfoContact icon={email} title="E-mail" description="dradaniela@gmail.com"/>

                    <CardInfoContact icon={clock} title="Horário de Atendimento" description="Segunda a Sexta: 8h às 17h" info2="Sábado: 8h às 13h" info3="Atendimento noturno somente por agendamento"/>
                </div>

                <div className={styles.formWrapper}>
                    <h2>Formulário de Contato</h2>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div>
                            <label htmlFor="nome">Nome:</label>
                            <input type="text" id="nome" name="nome" required />
                        </div>
                        <div>
                            <label htmlFor="telefone">Telefone:</label>
                            <input type="tel" id="telefone" name="telefone" required />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div>
                            <label htmlFor="servico">Serviço:</label>
                            <select id="servico" name="servico" required>
                                <option value="">Selecione um serviço</option>
                                <option value="Clínico Geral">Clínico Geral</option>
                                <option value="Ortodontia">Ortodontia</option>
                                <option value="Endodontia">Endodontia</option>
                                <option value="Prótese">Prótese</option>
                                <option value="Estética">Estética</option>
                                <option value="Odontopediatria">Odontopediatria</option>
                                <option value="Fisioterapia">Fisioterapia</option>
                            </select>
                        </div>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </section>
    )
}