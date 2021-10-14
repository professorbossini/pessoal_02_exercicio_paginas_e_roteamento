import Link from 'next/link'
const EsportesPage = () => {
    return <ul>
        <li>
            <Link href="/esportes/olimpiadas-xadrez">
                Olimpíadas de xadrez estão chegando.
            </Link>
        </li>
        <li>
            <Link href="/esportes/volei-campea">
                Seleção de vôlei é campeã mais uma vez.
            </Link>
        </li>
    </ul>
}

export default EsportesPage