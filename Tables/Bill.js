const Bill = require('express').Router();

const sql = require('mssql')

Bill.route('/update').get(async (req,res) =>{
    try {
        const pool = await sql.connect('')

        const result = await pool.request()
        .input('id', sql.Int, 1)
        .input('Product name', sql.NVarChar, 'new name')
        .query('UPDATE yourTable SET name = @name WHERE id = @id')

    console.log(result)
    } catch (e) {
        const error = e;
        res.send({success: false, error: error })   
    }
    
});
Bill.route('/delete').get(async (req,res) =>{

    try {
        const pool = await sql.connect('')

        const result = await pool.request()
        .input('id', sql.Int, 1)
        .query('DELETE FROM yourTable WHERE id = @id')

        console.log(result)
    } catch (err) {
        console.log(err)
    }
});

module.exports = Bill;