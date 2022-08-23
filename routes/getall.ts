import { Hono } from 'https://deno.land/x/hono/mod.ts'

export const getall = new Hono()
import { DB } from "https://deno.land/x/sqlite/mod.ts";

// Open a database
const db = new DB("./mydb.sqlite");

getall.get("/",async(c)=>{
	let result = []
	const alldata = await db.query(`
select * from karyawan
`);
	alldata.map((p)=>{
		result = [...result,{id:p[0],nama:p[1]}]
	})		
		c.status(200)
	return c.json(result)
})