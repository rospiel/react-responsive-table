import { useEffect, useState } from 'react'
import './table.css'
import companiesJson from '../../data/companies.json'

interface Companie {
    name: string
    document: string 
    openingDate: string 
    mail: string
    phone: string 
    website: string
}



export default function Table(): JSX.Element {
    const [companies, setCompanies] = useState<Companie[]>([])

    useEffect(() => {
        setCompanies(Array.from(companiesJson as Companie[]))
    }, [])
    
    return (
        <main className='wrapper'>
            <table>
                <caption>
                    Companies
                </caption>
                <tr>
                    <th>Name</th>
                    <th>Document</th>
                    <th>Opening Date</th>
                    <th>Mail</th>
                    <th>Phone</th>
                </tr>
                {
                    companies.map((companie, position) => {
                        return (
                            <tr key={position}>
                                <td data-cell="name">{companie.name}</td>
                                <td data-cell="document">{companie.document}</td>
                                <td data-cell="openingDate">{companie.openingDate}</td>
                                <td data-cell="mail">{companie.mail}</td>
                                <td data-cell="phone">{companie.phone}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </main>
    )

}