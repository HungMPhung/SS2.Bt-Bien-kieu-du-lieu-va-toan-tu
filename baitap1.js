let inputDiemvatly;
let inputDiemhoahoc;
let inputDiemsinhhoc;
inputDiemvatly = prompt("Enter the Diemvatly");
inputDiemhoahoc = prompt("Enter the Diemhoahoc");
inputDiemsinhhoc = prompt("Enter the Diemsinhhoc");
let Diemvatly = parseInt(inputDiemvatly);
let Diemhoahoc = parseInt(inputDiemhoahoc);
let Diemsinhhoc = parseInt(inputDiemsinhhoc);
let AVG = (Diemvatly + Diemhoahoc + Diemsinhhoc)/3 ;
document.write(" The AVG is " + AVG);
