import { Hono } from 'https://deno.land/x/hono/mod.ts'
import { DB } from "https://deno.land/x/sqlite/mod.ts";

// Open a database
const db = new DB("./mydb.sqlite");
export const deletedata = new Hono()

deletedata.delete("/:id",async(c)=>{
	let id = await c.req.param("id")
	if(id){
		db.query(`
delete from karyawan where id = '${id}'
`);
		c.status(200)
	return c.json({msg:"delete id = " + id})
	}
})