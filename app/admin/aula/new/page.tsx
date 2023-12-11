import { sql } from "@vercel/postgres";

export const revalidate =0

export default function NewAula() {
    async function saveAula(formData: FormData){
        "use server"
        const name = formData.get("name") as string;
        const materia = formData.get("materia") as string;
        await sql`INSERT INTO aula (name, materia) VALUES(${name}, ${materia})`
        console.log("Acessou a função")
    }
    return (
        <div>
            <h1 className="text-white text-center text-4xl">Cadastrar Aulas</h1>
            <form>
                <input type="text" name="name" placeholder="Digite o nome do professor"/><br/><br/>
                <input type="text" name="materia" placeholder="Digite a materia do curso"/> <br/><br/>
                <button formAction={saveAula} className="text-white">Salvar</button>
            </form>
        </div>

    )
}