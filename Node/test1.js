const getUserSync= (id) => {
    let nama= '';
    if(id==1){
        nama='maman'
    }else{
        nama=`sodikin`
    }
    
    return{id, nama};
}

const userSatu = getUserSync(1);
console.log(userSatu);

const userDua =  getUserSync(2);
console.log(userDua);

const halo = 'Hw';
console.log(halo);