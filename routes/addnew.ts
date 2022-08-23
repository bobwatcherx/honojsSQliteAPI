import { Hono } from 'https://deno.land/x/hono/mod.ts'

export const addnew = new Hono()
import { DB } from "https://deno.land/x/sqlite/mod.ts";

// Open a database
const db = new DB("./mydb.sqlite");

addnew.post("/",async(c)=>{
	const body = await c.req.parseBody();
	const val = await JSON.parse(body)
	console.log(val)
	if(val){
		db.query(`
	insert into karyawan (nama) values('${val.nama}')
`);
		c.status(201)
	return c.json({msg:"created",data:val})
	}
})