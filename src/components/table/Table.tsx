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
                    <th>Website</th>
                </tr>
                {
                    companies.map((companie, position) => {
                        return (
                            <tr key={position}>
                                <td title={companie.name} data-cell="name">{companie.name}</td>
                                <td title={companie.document} data-cell="document">{companie.document}</td>
                                <td title={companie.openingDate} data-cell="openingDate">{companie.openingDate}</td>
                                <td title={companie.mail} data-cell="mail">{companie.mail}</td>
                                <td title={companie.phone} data-cell="phone">{companie.phone}</td>
                                <td title={companie.website} data-cell="website">{companie.website}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </main>
    )

}