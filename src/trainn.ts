// console.log("Hello World");

// console.log("MITASK-M");

// function getSquareNumbers(arr:number[]) {
//     let result: {
//         number: number;
//         square: number
//     }[] = []
//     for (let num of arr) { //array ichidaki har bir sonni aladi
//       let obj = {
//         number: num,
//         square: num ** 2
//       }
//       result.push(obj);
//     }
//     return result
// }

// console.log(getSquareNumbers([1,2,4,5,7,8,9])); //good


/* 
PROJECT STANDARTS:
- Login 
- Naming : Camel case , function, method, variable!
    class- Pascal 
    folder - Kebab
    css - Snake 
-Error handlings
*/

//API apllication programming interface.

//traditional api 
//rest api
//graphql api






// LESSON

//authentication  //VPS-VPC

//()AUTHENTICATION - WEB SERVERIMIZGA KIM MUROJAT KILYOTKANI
//  ANIQLASH MOBILE MI NOUTBUKMI .

// SESSION(COOKIES)
// TOKENS(COOKIES)
// TOKENS(HEADERS)


//()VPS HOSTING - VIRTUAL PRIVATE SERVER

//()CLOUD HOSTING  


//()CLIENT SERVER - MARKAZIY SERVER ,  TLEFON KAMPYUTER
//  NAUTBUKLAR BIR VAXTNI OZIDA MIROJAT KILOLADI.


//()PEER TO PEER - BU YERDA MARKAZIY SERVER TUSHUNCHASI YOK, 
//  Har bir kompyuter ham client, ham server bo‘lishi mumkin.
// BOSHQARISH QIYIN 



// SPA

// TRADITIONAL FRONTED DEVLOPMEMT - BSSR - EJS (ADMINKA)NI QURAMIZ

// MODERN FRONTED DEVELOPMENT  - FAQAT JSON DATA QABUL QILADI, 
// VA OZI HTML NI OZI HOS QILADI.                    () SPA, ()RAECT  



// public async signup(input: MemberInput): Promise<Member> { //promise faqat asyncrnsda
//         const salt = await bcrypt.genSalt();
//         input.memberPassword = await bcrypt.hash(input.memberPassword, salt);
        
//         try {
//         const result = await this.memberModel.create(input);
//         result.memberPassword = "";
//         return result.toJson();
//         } catch (err) {
//             console.error("Error, model:signup", err);
//             throw new Errors(HttpCode.BAD_REQUEST, Message.USED_NICK_PHONE);
//         }

//     }
//     public async login(input: LoginInput): Promise<Member> {
//       const member = await this.memberModel
//       .findOne
//       ({memberNick: input.memberNick},
//       { memberNick: 1, memberPassword: 1})
//       .exec();
//      if(!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK)
      
//     //  const isMatch = input.memberPassword === member.memberPassword;
//      const isMatch = await bcrypt.compare(
//         input.memberPassword,
//          member.memberPassword)


//      if(!isMatch) {
//         throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD);
//      }

//     return await this.memberModel.findById(member._id).lean().exec();
//     }
// }