//Zod is a library which helps in validating the input in easier way, we can parse the input given by the user for validating
//Use npm install zod
//Syntax: schema.parse(given_data) or schema.safeparse(given_data);

const zod = require("zod");

    

function validateDetails(e_mail, pass, cntry){
    const schema = zod.object({
        email: zod.string(),
        password: zod.string(),
        country: zod.literal("IN").or(zod.literal("US")),
    })

    const response = schema.safeParse({        //const response = schema.safeParse(e_mail,pass,cntry);  wrong way
        email: e_mail,
        password: pass,
        country: cntry
    });
    console.log(response);
}

validateDetails("rohitvkgdg","rvk@2024","IN");