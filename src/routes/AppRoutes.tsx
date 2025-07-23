import { Routes, Route } from "react-router"

import { Home } from "../pages/Home"
import { PoliticaPrivacidade } from "../pages/PoliticaPrivacidade"
import { TermosCondicoes } from "../pages/TermosCondicoes"

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" index element={<Home/>} />
            <Route path="/politica" element={<PoliticaPrivacidade/>} />
            <Route path="/termos" element={<TermosCondicoes/>} />
        </Routes>
    )
}