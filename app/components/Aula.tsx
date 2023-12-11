import { sql } from "@vercel/postgres";

export default async function Aula() {
    const { rows } = await sql`SELECT * from aula`;
    console.log(rows)
    return (
        <main className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="md:col-span-2 lg:col-span-3 mt-4 text-white text-center">
                <h2 id="aula">
                    CONHEÇA NOSSAS <span>AULAS</span>
                </h2>
            </div>
            {
                rows.map((aula) => {
                    return (
                        <div key={aula.id} className="bg-[#4d4d4d] rounded-md pb-2">
                            <a href="">
                                <div className="text-white text-center">
                                    <h3>{aula.name}L</h3>
                                    <p>{aula.materia}</p>
                                </div>
                            </a>
                        </div>
                    )
                })
            }
        </main>
  )
}