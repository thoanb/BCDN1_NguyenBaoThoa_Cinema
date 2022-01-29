import React, { Component } from 'react';
import {connect} from 'react-redux'

export default class HangGhe extends Component {

  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe,index)=>{

      let cssGheDaDat = '';
      let disabled = false;
      // Trang thai ghe da bi nguoi khac dat
      if(ghe.daDat){
        cssGheDaDat = 'gheDuocChon'
        disabled = true;
      }

      // Trang thai ghe dang dat
      // let cssGheDangDat = ''
      // let indexGheDangDat = this.props.danhSachGheDangDat.fidIndex(gheDangDat=>gheDangDat.soGhe === ghe)
      // if(indexGheDangDat !== -1){
      //   cssGheDangDat = 'gheDangChon'
      // }
      

      return <button onClick={()=>{

      }} disabled={disabled} className={`ghe ${cssGheDaDat}`} key={index}>
        {ghe.soGhe}
      </button>
    })
  }

  renderSohang = () => {
    return this.props.hangGhe.danhSachGhe.map((hang, index) => {
      return <button className='rowNumber'>
          {hang.soGhe}
      </button>
    })
  }

  renderHangGhe = () => {
    if(this.props.soHangGhe===0) {
      return <div className='ml-4'>
         {this.props.hangGhe.hang} {this.renderSohang()}
      </div>
    }else {
      return <div>
        {this.props.hangGhe.hang} {this.renderGhe()}
      </div>
    }
  }

  render() {
    return (
      <div className="text-light text-left ml-5 mt-1" style={{fontSize:30}}>
       {this.renderHangGhe()}
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat
//   }
// }

// export default connect (mapStateToProps)(HangGhe)