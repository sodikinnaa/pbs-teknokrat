const getUser= (id, cb) => {
    const time = id === 1 ? 3000 : 2000;
   setTimeout(()=>{
    let nama= '';
    if(id==1){
        nama='maman'
    }else{
        nama=`sodikin`
    }  
    cb({id, nama});
   },time);
}

const userSatu = getUser(1, (hasil) => {
    console.log(hasil);
});


const userDua =  getUser(2, (hasil) => {
    console.log(hasil);
});

const halo = 'selesai';
console.log(halo);