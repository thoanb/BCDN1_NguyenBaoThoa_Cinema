

const stateDefault = {
    danhSachGheDangDat: [
        //{soGhe:"A1",gia:1000}
    ]
}

const BaiTapDatVeReducer = (state = stateDefault,action) =>{

    switch(action.type){
        default: return {...state}
    }
}

export default BaiTapDatVeReducer;