// Contoh data request dari server dalam variabel
const getUserSync = (id) => {
    let nama = '';
    if(id==1){
        nama='maman'   
    }
    if(id==2){
        nama='sodikin'   
    }
    return(id, nama)
}
// Mengambil dan menampilkan data dari request 
const userSatu = getUserSync(1)
console.log(userSatu)

// Menampilkan data dari variabel
const hello ='Hello world'
console.log(hello)