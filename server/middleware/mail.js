const mailer = require("nodemailer");
const {Template_1} = require("../../src/template_1");

const getReceiverData = (to, name, template) =>{
    let data = null ;

    switch (template){
        case "template_1":
            data ={
                from:"JhKim",
                to,
                subject:`template_1 ${name}`,
                html: Template_1()
            }
            break;
        
        case "template_2":
            data ={
                from:"JhKim",
                to,
                subject:`template_2 ${name}`,
                html: `
                        <div>
                            [${name}] 님, 안녕하세요.
                        </div>
                    ` 
            }
            break;
        default:
            // data;
    }

    return data;
}

const sendEmail = (to, name, template)=>{
    const transport = mailer.createTransport({
        service:"gmail",
        // sender info
        auth:{
            user:"",
            pass:""
        }
    })

    const email = getReceiverData(to, name, template)

    transport.sendMail(email, function(err, res){
        if(err){
            console.log(err);
        }else{
            console.log("email sent successfully")
        }
        transport.close()
    })
}
module.exports ={ sendEmail }