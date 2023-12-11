import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export const revalidate =0

export default async function ListAula() {
    async function deleteAula(formData: FormData){
        "use server"
        const id = formData.get("id") as string;
        await sql`DELETE from aula where id=${id}`
        revalidatePath("/admin/aula")
    }
    const { rows } = await sql`SELECT * from aula`;
    return (
        <div>
            <h1 className="text-center text-white">Lista de Cursos</h1>

            <table>
                <thead>
                    <tr> <td>Título do Curso</td> <td>Descrição</td></tr>
                </thead>
                <tbody>
                    {
                        rows.map((aula) => {
                            return (
                                <tr key={aula.id}><td>{aula.name}</td> <td>{aula.materia}</td> 
                                <td>
                                    <form >
                                     <input type="text" hidden name="id" value={aula.id}/>   
                                    <button formAction={deleteAula}>Excluir</button>
                                    </form>
                                
                                </td> 
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>


        </div>
    )
}