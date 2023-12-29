setTimeout(function () {
  try {
    noSuchVariable; // try..catch sẽ bắt được lỗi chưa khai báo biến!
  } catch {
    console.log("Lỗi được bắt!");
  }
}, 1000);
