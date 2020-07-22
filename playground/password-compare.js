const bcryptjs=require('bcryptjs')

const encrypted = '$2a$10$bq6V6wTCeSBs3SdsaoGumOo.c89bw.VCOOnTZuR/xsKgpfh8ToYcm'
const inputPass='secret123'

bcryptjs.compare(inputPass,encrypted)
        .then((match)=>{
            console.log(match)
        })