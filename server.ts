import { serve } from 'https://deno.land/std/http/server.ts'
import { Hono } from 'https://deno.land/x/hono/mod.ts'
import {addnew} from './routes/addnew.ts'
import {deletedata} from './routes/deletedata.ts'
import {editdata} from './routes/updatedata.ts'
import {getall} from './routes/getall.ts'
const app = new Hono()

app.route("/",getall)
app.route("/edit",editdata)
app.route("/delete",deletedata)
app.route("/add",addnew)

serve(app.fetch)