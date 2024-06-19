function checkKonkord() {

if (curSlide==0) {konkordanz=""; return}

//Parzival
if (curSlide==1 && rectoVerso=="r") {konkordanz="1.01-2.10 / 2.11-4.04 / 4.05-5.28"; return}
if (curSlide==1 && rectoVerso=="v") {konkordanz="5.29-7.18 / 7.19-9.08 / 9.09-10.26"; return}
if (curSlide==2 && rectoVerso=="r") {konkordanz="10.27-12.16 / 12.17-14.08 / 14.09-16.03"; return}
if (curSlide==2 && rectoVerso=="v") {konkordanz="16.04-17.24 / 17.25-19.17 / 19.18-21.12"; return}
if (curSlide==3 && rectoVerso=="r") {konkordanz="21.13-23.03 / 23.04-24.25 / 24.26-26.18"; return}
if (curSlide==3 && rectoVerso=="v") {konkordanz="26.19-28.06 / 28.07-29.26 / 29.27-31.24"; return}
if (curSlide==4 && rectoVerso=="r") {konkordanz="31.25-33.18 / 33.17-35.10 / 35.11-37.12"; return}
if (curSlide==4 && rectoVerso=="v") {konkordanz="37.13-39.02 / 39.03-40.25 / 40.26-42.20"; return}
if (curSlide==5 && rectoVerso=="r") {konkordanz="42.21-44.11 / 44.12-46.03 / 46.04-47.28"; return}
if (curSlide==5 && rectoVerso=="v") {konkordanz="47.30-49.21 / 49.22-51.18 / 51.19-53.15"; return}
if (curSlide==6 && rectoVerso=="r") {konkordanz="53.16-55.11 / 55.12-57.01 / 57.02-58.25"; return}
if (curSlide==6 && rectoVerso=="v") {konkordanz="58.26-60.16 / 60.17-62.10 / 62.11-64.06"; return}
if (curSlide==7 && rectoVerso=="r") {konkordanz="64.07-66.01 / 66.02-67.26 / 67.27-69.24"; return}
if (curSlide==7 && rectoVerso=="v") {konkordanz="69.25-71.18 / 71.19-73.20 / 73.21-75.24"; return}
if (curSlide==8 && rectoVerso=="r") {konkordanz="75.25-77.25 / 77.26-79.25 / 79.26-81.26"; return}
if (curSlide==8 && rectoVerso=="v") {konkordanz="81.27-83.24 / 83.25-86.03 / 86.04-88.12"; return}
if (curSlide==9 && rectoVerso=="r") {konkordanz="88.13-90.16 / 90.17-92.22 / 92.23-94.30"; return}
if (curSlide==9 && rectoVerso=="v") {konkordanz="95.01-97.02 / 97.03-99.06 / 99.07-101.17"; return}
if (curSlide==10 && rectoVerso=="r") {konkordanz="101.18-103.21 / 103.22-105.21 / 105.22-107.29"; return}
if (curSlide==10 && rectoVerso=="v") {konkordanz="107.30-110.02 / 110.03-112.07 / 112.08-114.14"; return}
if (curSlide==11 && rectoVerso=="r") {konkordanz="114.15-116.16 / 116.19-118.18 / 118.19-120.22"; return}
if (curSlide==11 && rectoVerso=="v") {konkordanz="120.23-122.18 / 122.19-124.26 / 124.27-127.07"; return}
if (curSlide==12 && rectoVerso=="r") {konkordanz="127.08-129.17 / 129.18-131.24 / 131.25-133.30"; return}
if (curSlide==12 && rectoVerso=="v") {konkordanz="134.01-136.16 / 136.17-138.24 / 138.25-141.09"; return}
if (curSlide==13 && rectoVerso=="r") {konkordanz="141.10-143.18 / 143.19-145.26 / 145.27-148.10"; return}
if (curSlide==13 && rectoVerso=="v") {konkordanz="148.11-150.13 / 150.14-152.23 / 152.24-155.02"; return}
if (curSlide==14 && rectoVerso=="r") {konkordanz="155.03-157.10 / 157.11-159.22 / 159.23-162.04"; return}
if (curSlide==14 && rectoVerso=="v") {konkordanz="162.05-164.14 / 164.15-166.26 / 166.27-169.04"; return}
if (curSlide==15 && rectoVerso=="r") {konkordanz="169.05-171.12 / 171.13-173.19 / 173.20-175.30"; return}
if (curSlide==15 && rectoVerso=="v") {konkordanz="176.01-177.18 / 177.19-179.22 / 179.23-182.02"; return}
if (curSlide==16 && rectoVerso=="r") {konkordanz="182.03-184.14 / 184.15-186.27 / 186.28-189.11"; return}
if (curSlide==16 && rectoVerso=="v") {konkordanz="189.12-191.24 / 191.25-194.09 / 194.10-196.21"; return}
if (curSlide==17 && rectoVerso=="r") {konkordanz="196.22-199.02 / 199.03-201.16 / 201.17-204.02"; return}
if (curSlide==17 && rectoVerso=="v") {konkordanz="204.03-206.08 / 206.09-208.16 / 208.17-211.19"; return}
if (curSlide==18 && rectoVerso=="r") {konkordanz="211.20-213.26 / 213.27-216.11 / 216.12-218.26"; return}
if (curSlide==18 && rectoVerso=="v") {konkordanz="218.27-221.04 / 221.05-223.19 / 223.20-226.04"; return}
if (curSlide==19 && rectoVerso=="r") {konkordanz="226.05-228.16 / 228.25-232.05 / 232.06-234.19"; return}
if (curSlide==19 && rectoVerso=="v") {konkordanz="234.20-236.22 / 236.23-238.30 / 239.01-241.08"; return}
if (curSlide==20 && rectoVerso=="r") {konkordanz="241.09-243.16 / 243.17-245.27 / 245.28-248.08"; return}
if (curSlide==20 && rectoVerso=="v") {konkordanz="248.09-250.13 / 250.14-252.26 / 252.27-255.12"; return}
if (curSlide==21 && rectoVerso=="r") {konkordanz="255.13-257.21 / 257.22-260.08 / 260.09-262.26"; return}
if (curSlide==21 && rectoVerso=="v") {konkordanz="262.27-265.10 / 265.11-267.24 / 267.25-270.14"; return}
if (curSlide==22 && rectoVerso=="r") {konkordanz="270.15-273.01 / 273.02-275.19 / 275.20-278.06"; return}
if (curSlide==22 && rectoVerso=="v") {konkordanz="278.07-280.18 / 280.19-283.02 / 283.03-285.20"; return}
if (curSlide==23 && rectoVerso=="r") {konkordanz="285.21-288.04 / 288.05-290.21 / 290.22-293.11"; return}
if (curSlide==23 && rectoVerso=="v") {konkordanz="293.12-295.20 / 295.21-298.08 / 298.09-300.23"; return}
if (curSlide==24 && rectoVerso=="r") {konkordanz="300.24-303.12 / 303.13-306.02 / 306.03-308.22"; return}
if (curSlide==24 && rectoVerso=="v") {konkordanz="308.23-311.09 / 311.10-313.30 / 314.01-316.17"; return}
if (curSlide==25 && rectoVerso=="r") {konkordanz="316.18-319.04 / 319.05-321.18 / 321.19-323.28"; return}
if (curSlide==25 && rectoVerso=="v") {konkordanz="323.29-326.03 / 326.04-328.19 / 328.20-331.14"; return}
if (curSlide==26 && rectoVerso=="r") {konkordanz="331.15-333.28 / 333.29-338.11 / 338.12-340.29"; return}
if (curSlide==26 && rectoVerso=="v") {konkordanz="340.30-343.13 / 343.14-345.29 / 345.30-348.15"; return}
if (curSlide==27 && rectoVerso=="r") {konkordanz="348.16-350.24 / 350.25-353.07 / 353.08-355.23"; return}
if (curSlide==27 && rectoVerso=="v") {konkordanz="355.24-357.25 / 357.26-360.08 / 360.09-362.23"; return}
if (curSlide==28 && rectoVerso=="r") {konkordanz="362.24-365.04 / 365.05-367.19 / 367.20-370.03"; return}
if (curSlide==28 && rectoVerso=="v") {konkordanz="370.04-372.15 / 372.16-375.04 / 375.05-377.20"; return}
if (curSlide==29 && rectoVerso=="r") {konkordanz="377.21-380.04 / 380.05-382.19 / 382.20-385.03"; return}
if (curSlide==29 && rectoVerso=="v") {konkordanz="385.04-387.15 / 387.16-390.01 / 390.02-392.18"; return}
if (curSlide==30 && rectoVerso=="r") {konkordanz="392.19-394.26 / 394.27-397.06 / 397.07-399.16"; return}
if (curSlide==30 && rectoVerso=="v") {konkordanz="399.17-401.21 / 401.22-403.28 / 403.29-406.10"; return}
if (curSlide==31 && rectoVerso=="r") {konkordanz="406.11-408.30 / 409.01-411.14 / 411.15-413.26"; return}
if (curSlide==31 && rectoVerso=="v") {konkordanz="413.27-415.30 / 416.01-418.14 / 418.15-420.24"; return}
if (curSlide==32 && rectoVerso=="r") {konkordanz="420.25-423.06 / 423.07-425.24 / 425.25-428.13"; return}
if (curSlide==32 && rectoVerso=="v") {konkordanz="428.14-430.22 / 430.23-433.06 / 433.07-435.15"; return}
if (curSlide==33 && rectoVerso=="r") {konkordanz="435.16-437.11 / 437.12-439.05 / 439.06-440.30"; return}
if (curSlide==33 && rectoVerso=="v") {konkordanz="441.01-442.19 / 442.20-444.14 / 444.15-446.07"; return}
if (curSlide==34 && rectoVerso=="r") {konkordanz="446.08-448.02 / 448.03-449.27 / 449.28-451.20"; return}
if (curSlide==34 && rectoVerso=="v") {konkordanz="451.21-453.14 / 453.15-455.08 / 455.10-457.05"; return}
if (curSlide==35 && rectoVerso=="r") {konkordanz="457.06-458.30 / 459.01-460.23 / 460.24-462.18"; return}
if (curSlide==35 && rectoVerso=="v") {konkordanz="462.19-464.12 / 464.13-466.07 / 466.08-467.30"; return}
if (curSlide==36 && rectoVerso=="r") {konkordanz="468.01-469.24 / 469.25-471.20 / 471.21-473.15"; return}
if (curSlide==36 && rectoVerso=="v") {konkordanz="473.16-475.07 / 475.08-477.01 / 477.02-478.26"; return}
if (curSlide==37 && rectoVerso=="r") {konkordanz="478.27-480.19 / 480.20-482.14 / 482.15-484.08"; return}
if (curSlide==37 && rectoVerso=="v") {konkordanz="484.09-486.02 / 486.03-487.27 / 487.28-489.22"; return}
if (curSlide==38 && rectoVerso=="r") {konkordanz="489.23-491.17 / 491.18-493.11 / 493.12-495.04"; return}
if (curSlide==38 && rectoVerso=="v") {konkordanz="495.05-496.30 / 497.01-498.28 / 498.29-500.23"; return}
if (curSlide==39 && rectoVerso=="r") {konkordanz="500.24-502.18 / 502.19-504.14 / 504.15-506.08"; return}
if (curSlide==39 && rectoVerso=="v") {konkordanz="506.09-508.02 / 508.03-509.28 / 509.29-511.23"; return}
if (curSlide==40 && rectoVerso=="r") {konkordanz="511.24-513.19 / 513.20-515.14 / 515.15-517.09"; return}
if (curSlide==40 && rectoVerso=="v") {konkordanz="517.10-519.02 / 519.03-520.27 / 520.28-522.22"; return}
if (curSlide==41 && rectoVerso=="r") {konkordanz="522.23-524.15 / 524.16-526.10 / 526.11-528.05"; return}
if (curSlide==41 && rectoVerso=="v") {konkordanz="528.06-529.27 / 529.28-531.20 / 531.21-533.16"; return}
if (curSlide==42 && rectoVerso=="r") {konkordanz="533.17-535.11 / 535.12-537.06 / 537.07-538.30"; return}
if (curSlide==42 && rectoVerso=="v") {konkordanz="539.01-540.26 / 540.27-542.21 / 542.22-544.16"; return}
if (curSlide==43 && rectoVerso=="r") {konkordanz="544.17-546.11 / 546.12-548.04 / 548.05-549.29"; return}
if (curSlide==43 && rectoVerso=="v") {konkordanz="549.30-551.24 / 551.25-553.19 / 553.20-555.14"; return}
if (curSlide==44 && rectoVerso=="r") {konkordanz="555.15-557.09 / 557.10-559.04 / 559.05-560.29"; return}
if (curSlide==44 && rectoVerso=="v") {konkordanz="560.30-562.23 / 562.24-564.18 / 564.19-566.13"; return}
if (curSlide==45 && rectoVerso=="r") {konkordanz="566.14-568.08 / 568.09-570.05 / 570.06-572.02"; return}
if (curSlide==45 && rectoVerso=="v") {konkordanz="572.03-574.03 / 574.04-576.02 / 576.03-578.02"; return}
if (curSlide==46 && rectoVerso=="r") {konkordanz="578.03-579.30 / 580.01-581.27 / 581.28-583.28"; return}
if (curSlide==46 && rectoVerso=="v") {konkordanz="583.29-586.01 / 586.02-587.29 / 587.30-589.30"; return}
if (curSlide==47 && rectoVerso=="r") {konkordanz="590.01-591.29 / 591.30-593.30 / 594.01-595.29"; return}
if (curSlide==47 && rectoVerso=="v") {konkordanz="595.30-598.04 / 598.05-600.07 / 600.08-602.12"; return}
if (curSlide==48 && rectoVerso=="r") {konkordanz="602.13-604.12 / 604.13-606.15 / 606.16-608.16"; return}
if (curSlide==48 && rectoVerso=="v") {konkordanz="608.17-610.16 / 610.17-612.17 / 612.18-614.18"; return}
if (curSlide==49 && rectoVerso=="r") {konkordanz=""; return}
if (curSlide==49 && rectoVerso=="v") {konkordanz=""; return}
if (curSlide==50 && rectoVerso=="r") {konkordanz=""; return}
if (curSlide==50 && rectoVerso=="v") {konkordanz=""; return}
if (curSlide==51 && rectoVerso=="r") {konkordanz="614.19-616.15 / 616.16-618.12 / 618.13-620.10"; return}
if (curSlide==51 && rectoVerso=="v") {konkordanz="620.11-622.06 / 622.07-624.04 / 624.05-626.02"; return}
if (curSlide==52 && rectoVerso=="r") {konkordanz="626.03-627.30 / 628.01-629.27 / 629.28-631.24"; return}
if (curSlide==52 && rectoVerso=="v") {konkordanz="631.25-633.20 / 633.21-635.20 / 635.21-637.21"; return}
if (curSlide==53 && rectoVerso=="r") {konkordanz="637.22-639.20 / 639.21-641.18 / 641.19-643.18"; return}
if (curSlide==53 && rectoVerso=="v") {konkordanz="643.19-21"; return}
if (curSlide==54 && rectoVerso=="r") {konkordanz="643.19-645.18 / 645.19-647.18 / 647.19-649.16"; return}
if (curSlide==54 && rectoVerso=="v") {konkordanz="649.17-651.16 / 651.17-652.18 / 652.19-653.08"; return}
if (curSlide==55 && rectoVerso=="r") {konkordanz="653.09-655.11 / 655.12-657.06 / 657.07-659.01"; return}
if (curSlide==55 && rectoVerso=="v") {konkordanz="659.02-660.26 / 660.27-662.21 / 662.22-664.16"; return}
if (curSlide==56 && rectoVerso=="r") {konkordanz="664.17-666.11 / 666.12-668.08 / 668.09-670.03"; return}
if (curSlide==56 && rectoVerso=="v") {konkordanz="670.04-671.29 / 671.30-673.26 / 673.27-675.22"; return}
if (curSlide==57 && rectoVerso=="r") {konkordanz="675.23-677.18 / 677.19-679.14 / 679.15-681.10"; return}
if (curSlide==57 && rectoVerso=="v") {konkordanz="681.11-683.06 / 683.07-685.02 / 685.03-686.28"; return}
if (curSlide==58 && rectoVerso=="r") {konkordanz="686.29-688.24 / 688.25-690.20 / 690.21-692.16"; return}
if (curSlide==58 && rectoVerso=="v") {konkordanz="692.17-694.11 / 694.12-696.06 / 696.07-697.30"; return}
if (curSlide==59 && rectoVerso=="r") {konkordanz="698.01-699.25 / 699.26-701.16 / 701.17-703.07"; return}
if (curSlide==59 && rectoVerso=="v") {konkordanz="703.08-704.27 / 704.28-706.18 / 706.19-708.09"; return}
if (curSlide==60 && rectoVerso=="r") {konkordanz="708.10-709.30 / 710.01-711.21 / 711.23-713.14"; return}
if (curSlide==60 && rectoVerso=="v") {konkordanz="713.15-715.06 / 715.07-716.28 / 716.29-718.20"; return}
if (curSlide==61 && rectoVerso=="r") {konkordanz="718.21-720.12 / 720.13-722.05 / 722.06-723.28"; return}
if (curSlide==61 && rectoVerso=="v") {konkordanz="723.29-725.21 / 725.22-727.14 / 727.15-729.06"; return}
if (curSlide==62 && rectoVerso=="r") {konkordanz="729.07-730.30 / 731.01-732.24 / 732.25-734.17"; return}
if (curSlide==62 && rectoVerso=="v") {konkordanz="734.18-736.11 / 736.12-738.10 / 738.11-740.05"; return}
if (curSlide==63 && rectoVerso=="r") {konkordanz="740.06-741.30 / 742.01-743.28 / 743.29-745.23"; return}
if (curSlide==63 && rectoVerso=="v") {konkordanz="745.24-747.18 / 747.19-749.13 / 749.14-751.08"; return}
if (curSlide==64 && rectoVerso=="r") {konkordanz="751.09-753.03 / 753.04-754.28 / 754.29-756.23"; return}
if (curSlide==64 && rectoVerso=="v") {konkordanz="756.24-758.19 / 758.20-760.15 / 760.16-762.11"; return}
if (curSlide==65 && rectoVerso=="r") {konkordanz="762.12-764.08 / 764.09-766.04 / 766.05-767.29"; return}
if (curSlide==65 && rectoVerso=="v") {konkordanz="767.30-769.22 / 769.23-773.03 / 773.04-774.28"; return}
if (curSlide==66 && rectoVerso=="r") {konkordanz="774.29-776.23 / 776.24-778.18 / 778.19-780.13"; return}
if (curSlide==66 && rectoVerso=="v") {konkordanz="780.14-782.07 / 782.08-783.30 / 784.01-785.24"; return}
if (curSlide==67 && rectoVerso=="r") {konkordanz="785.25-787.18 / 787.19-789.12 / 789.13-791.07"; return}
if (curSlide==67 && rectoVerso=="v") {konkordanz="791.09-793.02 / 793.03-794.29 / 794.30-796.23"; return}
if (curSlide==68 && rectoVerso=="r") {konkordanz="796.24-798.19 / 798.20-800.12 / 800.13-802.06"; return}
if (curSlide==68 && rectoVerso=="v") {konkordanz="802.07-803.29 / 803.30-805.21 / 805.22-807.13"; return}
if (curSlide==69 && rectoVerso=="r") {konkordanz="807.14-809.06 / 809.07-810.29 / 810.30-812.19"; return}
if (curSlide==69 && rectoVerso=="v") {konkordanz="812.20-814.11 / 814.12-816.06 / 816.07-817.30"; return}
if (curSlide==70 && rectoVerso=="r") {konkordanz="818.01-819.26 / 819.27-821.22 / 821.23-823.18"; return}
if (curSlide==70 && rectoVerso=="v") {konkordanz="823.19-825.13 / 825.14-827.08 / 827.09-827.30"; return}

//Titurel
if (curSlide==71 && rectoVerso=="r") {konkordanz="1.01-10.01 / 10.01-18.03 / 18.4-28.04"; return}
if (curSlide==71 && rectoVerso=="v") {konkordanz="29.01-42.02 / 42.02-51.02 / 51.02-61.04"; return}
if (curSlide==72 && rectoVerso=="r") {konkordanz="62.01-70.02 / 70.02-76.04 / 77.01-90.03"; return}
if (curSlide==72 && rectoVerso=="v") {konkordanz="90.04-97.02 / 97.03-104.04 / 105.01 - 113.02"; return}
if (curSlide==73 && rectoVerso=="r") {konkordanz="113.02-121.02 / 121.03-131.01 / 131.02-138.03"; return}
if (curSlide==73 && rectoVerso=="v") {konkordanz="138.04-145.02 / 145.03-153.02 / 153.03-161.02"; return}
if (curSlide==74 && rectoVerso=="r") {konkordanz="161.02-167.04 / 167.04-174.03 / 174.04-175.04"; return}

//???
if (curSlide==74 && rectoVerso=="v") {konkordanz=""; return}

//Prosaerzählungen
if (curSlide==75 && rectoVerso=="r") {konkordanz=""; return}

//Lieder
if (curSlide>=75 && rectoVerso=="v") {konkordanz=""; return}





}