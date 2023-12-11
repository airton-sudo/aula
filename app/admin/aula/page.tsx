import { sql } from "@vercel/postgres";

export const revalidate =0

export default async function ListCourse() {
    const { rows } = await sql`SELECT * from aula`;
    return (
        <div>
            <h1 className="text-center text-white">Lista de aulas</h1>

            <table>
                <thead>
                    <tr> <td>Nome do professor</td> <td>Materia</td></tr>
                </thead>
                <tbody>
                    {
                        rows.map((aula) => {
                            return (
                                <tr key={aula.id}><td>{aula.name}</td> <td>{aula.materia}</td> </tr>
                            )
                        })
                    }
                </tbody>
            </table>


        </div>
    )
}