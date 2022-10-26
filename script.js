// let a=6;
// // 1-MISOL A butun son berilgan. Jumlani rostlikka tekshiring: A son musbat
// if(a>0){
//     console.log("1-misol     a-musbat son");
    
// }
// else{
//     console.log("1-misol     a-manfiy son");
// }
// var b=a%2;
// // 2-MISOL A butun son berilgan. Jumlani rostlikka tekshiring: A toq son
// if(b==1){
//     console.log("2-misol     a toq son");
// }
// // 3-MISOL A butun son berilgan. Junlani rostlikka tekshiring: A juft son
// else{
//     console.log("3-misol     a-juft son");
// }
// // 4-MISOL Ikkita butun son berilgan. Jumlani rostlikka tekshiring. M-s a > 0 && b > 0
// if(a>0 && b>0){
//     console.log("4-misol     true");
// }
// else{
//     console.log("4-misol     false");
// }

// var c=6;
// // 5-MISOL 3 ta son berilgan a,b,c. a bdan katta b c dan katta rostlikka tekshiring
// if(a>b && b>c){
//     console.log("5-misol     true");
// }
// else{
//     console.log("5-misol     false");
// }
// // 6-MISOL a, b, c, son berilgan. B son a va c sonlarni orasida yotadi.
// if(a>b>c){
//     console.log("6-misol     b=son a va c ning orasida yotadi  ");
// }
// else{console.log("6-misol     b=son a va c ning orasida yotmaydi");
// }
// // 7-MISOL a, b sonlar berilgan sonlarni toq songa tekshiring.
// var d=a%2;
// var f=b%2;
// if(d==1 && f==1){
//     console.log("7-misol     a va b toq son");
// }
// else{
//     console.log("7-misol     a va b juft son");
// }
// // 8-MISOL a,b,c,d sonlar berilgan barchasi musbat
// if(a>0 && b>0 && c>0 && d>0){
//     console.log("8-misol     berilgan sonlar musbat");
// }
// else{
//     console.log("8-misol     berilgan sonlar manfiy");
// }
// // 9-misol a,b,c sonlar berilgan kamida ikkitasi musbat berilgan
// let a=prompt("a sonini kiriting")
// let b=prompt("b sonini kiriting")
// let c=prompt("c sonini kiriting")
// if((a>0 && b>0) || (a>0 && c>0) || (b>0 && c>0)){
//     console.log("berilgan sonlardan kamida ikkitasi musbat");
// }
// else{
//     console.log("berilgan sonlar ichida musbatlari 2tadan kam");
// }
// M-10
// let kun=prompt("hafta kuning raqamini kiriting");
// if(kun==1){
//     console.log("dushanba");
// }else if(kun==2){
//     console.log("seshanba");
// }else if(kun==3){
//     console.log("chorshanba");
// }else if(kun==4){
//     console.log("payshanba");
// }else if(kun==5){
//     console.log("juma");
// }else if(kun==6){
//     console.log("shanba");
// }else if(kun==7){
//     console.log("yakshanba");
// }else{
//     console.log("bunday kun yoq");
// }
// M-11
// let kod =prompt("tel raqam kodini kiriting");

// if(kod==90 || kod==91){
//     console.log("Bu kompaniya beline");
// }
// else if(kod==99){
//     console.log("uzmobile");
// }
// else if(kod==97){
//     console.log("ucel");
// }
// else if(kod==88){
//     console.log("humans");
// }
// else if(kod==71){
//     console.log("perfectum");
// }
// else{
//     console.log("bunday kod mavjud emas");
// }


// // 12-MISOL Butun son berilgan agar son musbat bo'lsa unda sonni bittaga oshiring aks xolda 1taga kamaytiring
// if(a>0){
//     t=a+1; console.log("12-misol    ",t);
// }
// else{
//     t=a-1; console.log("12-misol    ", t);
// }
// // 13-MISOL Butun son berilgan agar son musbat bo'lsa sonni 3 ga oshiring manfiy bo'lsa unda 2ga kamaytiring
// if(a>0){
//     p=a+3; console.log("13-misol     ",p);
// }
// else{
//     p=a-2; console.log("13-misol     ",p);
// }
// // 14-MISOL Ikkita butun son berilgan kattasin aniqlovchi dastur tuzing
// if(t>p){
//     console.log("14-misol     t soni katta");
// }
// else{
//     console.log("14-misol     p soni katta");
// }
// // 15-MISOL 3 ta butun son berilgan eng kattasini aniqlovchi dastur tuzing
// if(a>b && a>c){
//     console.log("15-misol     a soni katta");
// }
// else if(b>a && b>c){
//     console.log("15-misol     b soni katta");
// }
// else{
//     console.log("15-misol     c soni katta");
// }
// // 16-MISOL 3 ta son berilgan eng kichikin aniqlovchi dastur tuzing
// if(a<b && a<c){
//     console.log("16-misol     a soni kichik");
// }
// else if(b<a && b<c){
//     console.log("16-misol     b soni kichik");
// }
// else{
//     console.log("16-misol     c soni kichik");
// }