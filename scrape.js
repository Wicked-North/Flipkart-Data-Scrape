const cheerio=require('cheerio');
const   axios=require('axios');


axios.get('https://www.flipkart.com/computers/graphic-cards/pr?sid=6bo%2Cg0i%2C6sn&q=graphic+cards&otracker=categorytree&p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&p%5B%5D=facets.rating%255B%255D%3D4%25E2%2598%2585%2B%2526%2Babove')
    .then((res)=>{
    const $=cheerio.load(res.data);
    const gpu=[];
    const gpup=[];
    const gpura=[];
    const gpure=[];
    var iD=0;

         $('._2cLu-l').each((index,element)=>{

            const Name= $(element)
            .attr('title');
            iD++;


            gpu[index]={iD,Name};
            
        });
        
       var iD=0;
         $('._1vC4OE').each((index,element)=>{

            const Price= $(element)
            .text();
            
            iD++;
            gpup[index]={iD,Price};
            
            
        });
        var iD=0;
        
         $('.hGSR34').each((index,element)=>{

            const Rating= $(element)
            .text();
            iD++;

            gpura[index]={iD,Rating};
           
       });
       var iD=0;
        
         $('._38sUEc').each((index,element)=>{

            const tRev= $(element)
            .text();
            iD++;
           
            gpure[index]={iD,totalReviews: tRev};
            
        });
        let arr3 = gpu.map((item, i) => Object.assign({}, item, gpup[i]));
        let arr4 = arr3.map((item, i) => Object.assign({}, item, gpura[i]));
        let Final = arr4.map((item, i) => Object.assign({}, item, gpure[i]));

        console.log(Final);
        
       

});