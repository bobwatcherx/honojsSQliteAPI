import { Hono } from 'https://deno.land/x/hono/mod.ts'
import { DB } from "https://deno.land/x/sqlite/mod.ts";

// Open a database
const db = new DB("./mydb.sqlite");
export const editdata = new Hono()

editdata.put("/:id",async(c)=>{
	let id = await c.req.param("id")
	const body = await c.req.parseBody();
	const val = await JSON.parse(body)
	console.log(val)
	if(val){
	const result = await	db.query(`
		update karyawan set nama = '${val.nama}'
		where id = '${id}' 

`);
		if(result){
				c.status(200)
	return c.json({msg:"update id = " + id})
		}
	}
})