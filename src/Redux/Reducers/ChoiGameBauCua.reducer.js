const stateGame = {
  mangCuoc: [
    { ma: "trinh", hinhAnh: "./images/trinh.png", diemCuoc: 0 },
    { ma: "duyen", hinhAnh: "./images/duyen.png", diemCuoc: 0 },
    { ma: "thang", hinhAnh: "./images/thang.png", diemCuoc: 0 },
    { ma: "phuc", hinhAnh: "./images/phuc.png", diemCuoc: 0 },
    { ma: "anh", hinhAnh: "./images/anh.png", diemCuoc: 0 },
    { ma: "han", hinhAnh: "./images/han.png", diemCuoc: 0 }
  ],
  tongDiem: 100,
  tongDiemDaCuoc: 0,
  isExit: false,
  xucXac: [
    { ma: "han", hinhAnh: "./images/trinh.png" },
    { ma: "han", hinhAnh: "./images/trinh.png" },
    { ma: "han", hinhAnh: "./images/trinh.png" }
  ]
};
const gamePlayStoreReducer = (state = stateGame, action) => {
  let mangPhanTuDaDatCuoc = state.mangCuoc.filter(x => x.diemCuoc > 0);
  switch (action.type) {
    case "DAT_CUOC": {
      let datCuoc = [...state.mangCuoc];
      let index = datCuoc.findIndex(item => item.ma === action.ma);
      if (index !== -1) {
        if (state.tongDiem > 0) {
          state.tongDiemDaCuoc = datCuoc.reduce(function(total, item) {
            return total + item.diemCuoc;
          }, 0);
          // if (state.tongDiemDaCuoc > state.tongDiem) {
          //   datCuoc[index].diemCuoc += 0;
          // }
          // if (
          //   mangPhanTuDaDatCuoc.length >= 3 &&
          //   state.tongDiemDaCuoc !== state.tongDiem
          // ) {
          //   alert("Bạn chỉ đặt cược được tối đa 3 hình");
          //   datCuoc[index].diemCuoc += 0;
          // }
          if (state.tongDiemDaCuoc === state.tongDiem) {
            // alert("Điểm đã cược vượt quá tổng điểm bạn đang có");
            datCuoc[index].diemCuoc += 0;
          } else {
            datCuoc[index].diemCuoc += 10;
          }
        }
      }
      state.mangCuoc = datCuoc;
      return { ...state };
    }
    case "CHOI_GAME": {
      let mangChoiGame = [];
      let datCuoc = [...state.mangCuoc];
      for (let i = 0; i < 3; i++) {
        let random = Math.floor(Math.random() * 6);
        let xucXacMoi = {
          ma: state.mangCuoc[random].ma,
          hinhAnh: state.mangCuoc[random].hinhAnh
        };
        mangChoiGame.push(xucXacMoi);
      }
      state.xucXac = mangChoiGame;
      for (let i = 0; i < mangPhanTuDaDatCuoc.length; i++) {
        let count = 0;
        for (let j = 0; j < mangChoiGame.length; j++) {
          if (mangChoiGame[j].ma === mangPhanTuDaDatCuoc[i].ma) {
            count++;
          }
        }
        console.log(mangPhanTuDaDatCuoc[i].ma + " count is " + count);
        if (count === 0) {
          state.tongDiem -= mangPhanTuDaDatCuoc[i].diemCuoc;
          mangPhanTuDaDatCuoc[i].diemCuoc = 0;
          state.mangCuoc = datCuoc;
        } else {
          state.tongDiem += mangPhanTuDaDatCuoc[i].diemCuoc * count;
          mangPhanTuDaDatCuoc[i].diemCuoc = 0;
          state.mangCuoc = datCuoc;
        }
      }
      return { ...state };
    }
    case "RESET_DIEM": {
      state.tongDiem = 100;
      return { ...state };
    }
    case "CHECK_CLICK": {
      state.isExit = action.isExit;
      return { ...state };
    }
    default: {
    }
  }
  return { ...state };
};
export default gamePlayStoreReducer;
