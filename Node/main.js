// Contoh data request dari server dalam variabel
const gerUser=(id, cb)=>{
    const time = id === 1 ? 3000 : 2000;
    setTimeout(()=>{
        if(id==1){
            nama = 'maman'
        }
        if(id==2){
            nama = 'sodikin'
        }
        cb({id,nama})
    }, time)
}

// Mengambil dan menampilkan data dari request 
const userSatu = gerUser(1, (hasil) => {
    console.log(hasil)
})

// Menampilkan data dari variabel
const hello ='Hello world'
console.log(hello)