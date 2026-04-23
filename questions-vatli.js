const questions = [
  { id: 1, text: 'Suất điện động của nguồn điện là đại lượng được đo bằng', options: ['công của lực lạ tác dụng lên điện tích q dương.', 'thương số giữa công và lực lạ tác dụng lên điện tích q dương.', 'thương số giữa lực lạ tác dụng lên điện tích q dương và độ lớn điện tích ấy.', 'thương số giữa công của lực lạ dịch chuyển điện tích dương q từ cực âm đến cực dương trong nguồn và độ lớn của điện tích đó.'], correct: 'D' },
  { id: 2, text: 'Thiết bị, dụng cụ biến đổi hoàn toàn điện năng tiêu thụ thành nhiệt năng là', options: ['quạt điện.', 'ấm đun nước siêu tốc.', 'máy giặt.', 'bóng đèn LED.'], correct: 'B' },
  { id: 3, text: 'Từ đồ thị biểu diễn sự phụ thuộc của cường độ dòng điện vào hiệu điện thế đối với hai điện trở \\\\(R_1, R_2\\). Tỉ số \\(\\frac{R_1}{R_2}\\) bằng', options: ['4', '0,25', '2', '0,5'], correct: 'A', img: 'https://video.vietjack.com/upload2/quiz_source1/2023/10/blobid0-1696819724.png' },
  { id: 4, text: 'Suất điện động của nguồn điện một chiều là \\(\\xi = 4\\,V\\). Công của lực lạ làm dịch chuyển một lượng điện tích \\(q = 5\\,mC\\) giữa hai cực bên trong nguồn điện là', options: ['1,5 mJ.', '0,8 mJ.', '20 mJ.', '5 mJ.'], correct: 'C' },
  { id: 5, text: 'Cho mạch điện như hình: \\(E = 12V; r = 1,1\\,\\Omega; R_1 = 3,5\\,\\Omega; R_2 = 1,4\\,\\Omega\\). Nhiệt lượng tỏa ra trên điện trở \\(R_1\\) trong thời gian 30 phút là', options: ['420 J.', '25200 J.', '25200 W.', '12600 J.'], correct: 'B', img: 'https://video.vietjack.com/upload2/quiz_source1/2020/05/580-1590492261.PNG' },
  { id: 6, text: 'Đặc điểm của điện trở nhiệt NTC có hệ số nhiệt điện trở', options: ['dương khi nhiệt độ tăng thì điện trở tăng.', 'dương khi nhiệt độ tăng thì điện trở giảm.', 'âm khi nhiệt độ tăng thì điện trở tăng.', 'âm khi nhiệt độ tăng thì điện trở giảm.'], correct: 'D' },
  { id: 7, text: 'Một nguồn điện có suất điện động \\(9V\\) và điện trở trong \\(1\\Omega\\) được mắc với điện trở thuần \\(R = 5\\Omega\\) thành mạch điện kín. Cường độ dòng điện chạy trong mạch là', options: ['2 A.', '2,5 A.', '1,5 A.', '2 A.'], correct: 'C' },
  { id: 8, text: 'Cho dòng điện 2A chạy qua một dây dẫn kim loại. Điện lượng chuyển qua tiết diện thẳng của dây dẫn trong 5s là', options: ['2,5 C.', '10 C.', '7 C.', '3 C.'], correct: 'B' },
  { id: 9, text: 'Đại lượng nào cho biết mức độ mạnh yếu của dòng điện?', options: ['hiệu điện thế.', 'Công suất.', 'Cường độ dòng điện.', 'Nhiệt lượng.'], correct: 'C' },
  { id: 10, text: 'Đơn vị của suất điện động là', options: ['Ampe (A).', 'Vôn (V).', 'Fara (F).', 'Vôn/mét (V/m).'], correct: 'B' },
  { id: 11, text: 'Dụng cụ nào sau đây không dùng trong thí nghiệm xác định suất điện động và điện trở trong của nguồn?', options: ['Pin điện hóa.', 'Đồng hồ đa năng hiện số.', 'Dây dẫn nối mạch.', 'Thước đo chiều dài.'], correct: 'D' },
  { id: 12, text: 'Cường độ dòng điện chạy qua tiết diện thẳng của dây dẫn là 1,5A trong khoảng thời gian 3s. Khi đó điện lượng dịch chuyển qua tiết diện dây là', options: ['0,5C', '2C', '4,5C', '4C'], correct: 'C' },
  { id: 13, text: 'Đặt hiệu điện thế 6V vào hai đầu điện trở \\(3\\Omega\\). Cường độ dòng điện chạy qua điện trở là', options: ['0,5A', '6A', '2A', '3A'], correct: 'C' },
  { id: 14, text: 'Một bộ acquy có suất điện động 12V. Khi được mắc vào mạch điện, trong thời gian 5 phút, acquy sinh ra một công là 720J. Cường độ dòng điện chạy qua acquy khi đó là', options: ['2A', '2,8A', '3A', '0,2A'], correct: 'D' },
  { id: 15, text: 'Cho các thao tác tiến hành thí nghiệm xác định suất điện động và điện trở trong của một pin điện hóa như sau: a. Gạt núm bật – tắt của miliampe kế và của vôn kế sang vị trí “ON”. b. Ghi giá trị ổn định của cường độ dòng điện trên miliampe kế và của hiệu điện thế trên vôn kế vào bảng. c. Đóng khóa K. d. Ngắt khóa K. Thứ tự thao tác đúng là', options: ['b, a, c, d', 'a, c, b, d', 'b, d, a, c', 'a, c, d, b'], correct: 'B' },
  { id: 16, text: 'Cho dòng điện 4,2A chạy qua một đoạn dây dẫn bằng kim loại dài 80cm có đường kính tiết diện 2,5mm. Mật độ êlectron dẫn của kim loại này là \\(8,5.10^{28}\\,electron/m^3\\). Thời gian trung bình mỗi êlectron dẫn di chuyển hết chiều dài đoạn dây gần nhất với giá trị nào sau đây?', options: ['4226s', '12716s', '26288s', '3175s'], correct: 'B' },
  { id: 17, text: 'Cho mạch điện như hình vẽ. Biết \\(R_1 = 5\\Omega; R_2 = 10\\Omega; R_3 = 3\\Omega; E = 6V; r = 2\\Omega\\). Hiệu điện thế hai đầu điện trở \\(R_1\\) là', options: ['5V', '9V', '1,5V', '3V'], correct: 'C', img: 'vat_li_db/cau_17.png' },
  { id: 18, text: 'Dụng cụ để đo cường độ dòng điện là', options: ['Ampe kế.', 'Vôn kế.', 'Ôm kế.', 'Nhiệt kế.'], correct: 'A' },
  { id: 19, text: 'Đặt hiệu điện thế \\(U\\) vào hai đầu đoạn mạch thì cường độ dòng điện chạy qua đoạn mạch là \\(I\\). Công thức tính năng lượng điện tiêu thụ của đoạn mạch trong thời gian \\(t\\) là', options: ['\\(A = UIt.\\)', '\\(A = U^2It.\\)', '\\(A = UIt^2.\\)', '\\(A = UI^2t.\\)'], correct: 'A' },
  { id: 20, text: 'Chọn phương án sai. Theo định luật Jun – Lenxo, nhiệt lượng tỏa ra trên vật dẫn', options: ['tỉ lệ thuận với điện trở của vật dẫn.', 'tỉ lệ thuận với thời gian dòng điện chạy qua vật dẫn.', 'tỉ lệ thuận với bình phương cường độ dòng điện chạy qua vật dẫn.', 'tỉ lệ nghịch với bình phương điện trở của vật dẫn.'], correct: 'D' },
  { id: 21, text: 'Đơn vị đo điện năng tiêu thụ trong thực tế là', options: ['J.', 'kWh.', 'kW.', 'kJ.'], correct: 'B' },
  { id: 22, text: 'Một bóng đèn hoạt động bình thường ở hiệu điện thế 110V, cường độ dòng điện qua đèn là 2A. Điện năng tiêu thụ của đèn trong mỗi giờ là:', options: ['0,44 kWh', '0,22 J', '792000 kWh', '0,22 kWh'], correct: 'D' },
  { id: 23, text: 'Cho mạch điện kín gồm acquy có suất điện động \\(\\xi = 2,2V\\), cung cấp điện năng cho điện trở mạch ngoài \\(R = 0,5\\,\\Omega\\). Hiệu suất của acquy \\(H = 65\\%\\). Cường độ dòng điện qua mạch là:', options: ['2,21 A', '0,5 A', '1,15 A', '2,86 A'], correct: 'D' },
  { id: 24, text: 'Lượng điện tích \\(\\Delta q\\) chuyển qua tiết diện thẳng của dây dẫn trong khoảng thời gian \\(\\Delta t\\) thì cường độ dòng điện chạy qua dây dẫn được xác định theo công thức', options: ['\\(I = \\frac{\\Delta q}{\\Delta t}\\)', '\\(I = \\frac{\\Delta t}{\\Delta q}\\)', '\\(I = \\Delta q \\cdot \\Delta t\\)', '\\(I = \\frac{(\\Delta q)^2}{\\Delta t}\\)'], correct: 'A' },
  { id: 25, text: 'Xét dòng điện có cường độ 2A chạy trong một dây dẫn. Điện lượng chuyển qua tiết diện thẳng của dây dẫn trong 5s có độ lớn', options: ['0,4C.', '2,5C.', '10C.', '7C.'], correct: 'C' },
  { id: 26, text: 'Một nguồn điện có suất điện động 200 mV. Để chuyển một điện lượng 10 C qua nguồn thì lực lạ phải sinh một công là', options: ['20 J.', '0,05 J.', '2000 J.', '2 J.'], correct: 'D' },
  { id: 27, text: 'Đặt vào hai đầu đoạn mạch một hiệu điện thế không đổi \\(U\\), thì cường độ dòng điện qua mạch là \\(I\\). Năng lượng điện tiêu thụ của đoạn mạch trong khoảng thời gian \\(t\\) là', options: ['\\(UIt\\)', '\\(UI\\)', '\\(\\frac{U^2}{R}t\\)', '\\(UI^2t\\)'], correct: 'A' },
  { id: 28, text: 'Dụng cụ đo điện năng tiêu thụ của dòng điện là', options: ['Vôn kế.', 'Ampe kế.', 'Oát kế.', 'Công tơ điện.'], correct: 'D' },
  { id: 29, text: 'Hai điện trở \\(R_1, R_2\\) (\\(R_1 > R_2\\)) được mắc vào hai điểm A và B có hiệu điện thế \\(U = 12 V\\). Khi \\(R_1\\) ghép nối tiếp với \\(R_2\\) thì công suất tiêu thụ của mạch là 4W; Khi \\(R_1\\) ghép song song với \\(R_2\\) thì công suất tiêu thụ của mạch là 18 W. Giá trị của \\(R_1, R_2\\) bằng', options: ['\\(R_1 = 24 \\, \\Omega; R_2 = 12 \\, \\Omega\\)', '\\(R_1 = 2,4 \\, \\Omega; R_2 = 1,2 \\, \\Omega\\)', '\\(R_1 = 240 \\, \\Omega; R_2 = 120 \\, \\Omega\\)', '\\(R_1 = 8 \\, \\Omega; R_2 = 6 \\, \\Omega\\)'], correct: 'A' },
  { id: 30, text: 'Chỉ ra câu sai.', options: ['Cường độ dòng điện được đo bằng ampe kế.', 'Để đo cường độ dòng điện, phải mắc nối tiếp ampe kế với mạch điện.', 'Dòng điện chạy qua ampe kế đi vào chốt dương, đi ra chốt âm của ampe kế.', 'Dòng điện chạy qua ampe kế đi vào chốt âm, đi ra chốt dương của ampe kế.'], correct: 'D' },
  { id: 31, text: 'Khi hiệu điện thế giữa hai bản tụ điện tăng lên 2 lần thì', options: ['điện dung của tụ điện giảm đi 2 lần.', 'điện dung của tụ điện tăng lên 2 lần.', 'điện tích của tụ điện tăng lên 2 lần.', 'điện tích của tụ điện giảm đi 2 lần.'], correct: 'C' },
  { id: 32, text: 'Một acquy đầy điện có dung lượng 20 A.h. Biết cường độ dòng điện mà nó cung cấp là 0,5A. Thời gian sử dụng của acquy là', options: ['\\(t = 5h\\).', '\\(t = 40h\\).', '\\(t = 20h\\).', '\\(t = 50h\\).'], correct: 'B' },
  { id: 33, text: 'Câu nào sau đây là sai?', options: ['Muốn có một dòng điện đi qua một điện trở, phải đặt một hiệu điện thế giữa hai đầu của nó.', 'Với một điện trở nhất định, hiệu điện thế ở hai đầu điện trở càng lớn thì dòng điện qua điện trở càng lớn.', 'Khi đặt cùng một hiệu điện thế vào hai đầu những điện trở khác nhau, điện trở càng lớn thì dòng điện qua điện trở càng nhỏ.', 'Cường độ dòng điện qua điện trở tỉ lệ thuận với giá trị của điện trở.'], correct: 'D' },
  { id: 34, text: 'Đặc điểm của điện trở nhiệt PTC là', options: ['khi nhiệt độ tăng thì điện trở giảm.', 'khi nhiệt độ tăng thì điện trở tăng.', 'khi nhiệt độ tăng thì điện trở không đổi.', 'khi nhiệt độ tăng thì điện trở bằng 0.'], correct: 'B' },
  { id: 35, text: 'Hai nguồn điện có ghi 20V và 40V, nhận xét nào sau đây là đúng?', options: ['Hai nguồn này luôn tạo ra một hiệu điện thế 20V và 40V cho mạch ngoài.', 'Khả năng sinh công của hai nguồn là 20J và 40J.', 'Nguồn thứ nhất luôn sinh công bằng một nửa nguồn thứ hai.', 'Khả năng sinh công của nguồn thứ nhất bằng một nửa nguồn thứ hai.'], correct: 'D' },
  { id: 36, text: 'Điều kiện để có dòng điện là', options: ['có hiệu điện thế.', 'có điện tích tự do.', 'có hiệu điện thế và điện tích tự do.', 'có nguồn điện.'], correct: 'C' },
  { id: 37, text: 'Công của nguồn điện là', options: ['lượng điện tích mà nguồn điện sinh ra trong 1 s.', 'công của lực lạ làm dịch chuyển điện tích bên trong nguồn.', 'công của dòng điện trong mạch kín sinh ra trong 1 s.', 'công của dòng điện khi dịch chuyển một đơn vị điện tích trong mạch kín.'], correct: 'B' },
  { id: 38, text: 'Một dòng điện không đổi chạy trong một dây dẫn. Biết trong thời gian 10s có một điện lượng 5mC chạy qua. Số electron chuyển qua tiết diện thẳng của dây dẫn trong thời gian 1s là', options: ['\\(3,125.10^{15}\\)', '\\(1,6.10^{-19}\\)', '\\(5.10^{20}\\)', '\\(5,5.10^{4}\\)'], correct: 'A' },
  { id: 39, text: 'Biểu thức đúng của định luật Ohm là:', options: ['\\(I = \\frac{R}{U}\\)', '\\(I = \\frac{U}{R}\\)', '\\(U = \\frac{I}{R}\\)', '\\(U = \\frac{R}{I}\\)'], correct: 'B' },
  { id: 40, text: 'Nguyên nhân gây ra điện trở của kim loại là sự va chạm của:', options: ['các electron tự do với chỗ mất trật tự của ion dương nút mạng.', 'các electron tự do với nhau trong quá trình chuyển động nhiệt hỗn loạn.', 'các ion dương nút mạng với nhau trong quá trình chuyển động nhiệt hỗn loạn.', 'các ion dương chuyển động định hướng dưới tác dụng của điện trường với các electron.'], correct: 'A' },
  { id: 41, text: 'Nguồn điện tạo ra hiệu điện thế giữa hai cực bằng cách:', options: ['tách electron ra khỏi nguyên tử và chuyển electron và ion về các cực của nguồn.', 'sinh ra electron ở cực âm.', 'sinh ra ion dương ở cực dương.', 'làm biến mất electron ở cực dương.'], correct: 'A' },
  { id: 42, text: 'Trong các nhận định về suất điện động, nhận định không đúng là:', options: ['Suất điện động là đại lượng đặc trưng cho khả năng sinh công của nguồn điện.', 'Suất điện động được đo bằng thương số công của lực lạ dịch chuyển điện tích ngược chiều điện trường và độ lớn điện tích dịch chuyển.', 'Đơn vị của suất điện động là Jun.', 'Suất điện động của nguồn có trị số bằng hiệu điện thế giữa hai cực khi mạch ngoài hở.'], correct: 'C' },
  { id: 43, text: 'Công suất điện được đo bằng đơn vị nào sau đây?', options: ['Niuton (N).', 'Jun (J).', 'Oát (W).', 'Culông (C).'], correct: 'C' },
  { id: 44, text: 'Một bàn là điện khi được sử dụng với hiệu điện thế 220V thì dòng điện chạy qua bàn là có cường độ là 5A. Điện năng bàn là tiêu thụ trong 30 phút là:', options: ['2,35 kWh.', '2,35 MJ.', '1,98 kJ.', '0,55 kWh.'], correct: 'D' },
  { id: 45, text: 'Đơn vị của cường độ dòng điện, suất điện động, điện lượng lần lượt là', options: ['vôn(V), ampe(A), ampe(A).', 'ampe(A), vôn(V), culông(C).', 'niuton(N), fara(F), vôn(V).', 'fara(F), vôn/mét(V/m), jun(J).'], correct: 'B' },
  { id: 46, text: 'Một bóng đèn ghi 220V – 100 W thì điện trở của đèn là', options: ['488 Ω.', '448 Ω.', '484 Ω.', '48 Ω.'], correct: 'C' },
  { id: 47, text: 'Chọn phát biểu đúng về định luật Ohm.', options: ['Cường độ dòng điện chạy qua dây dẫn tỉ lệ với hiệu điện thế giữa hai đầu dây dẫn và điện trở của dây.', 'Cường độ dòng điện chạy qua dây dẫn tỉ lệ thuận với hiệu điện thế giữa hai đầu dây dẫn và không tỉ lệ với điện trở của dây.', 'Cường độ dòng điện chạy qua dây dẫn tỉ lệ thuận với hiệu điện thế giữa hai đầu dây dẫn và tỉ lệ nghịch với điện trở của dây.', 'Cường độ dòng điện chạy qua dây dẫn tỉ lệ nghịch với hiệu điện thế giữa hai đầu dây dẫn và tỉ lệ thuận với điện trở của dây.'], correct: 'C' },
  { id: 48, text: 'Đại lượng đặc trưng cho khả năng thực hiện công của lực lạ bên trong nguồn điện là:', options: ['Suất điện động.', 'Cường độ dòng điện.', 'Hiệu điện thế.', 'Điện trở trong.'], correct: 'A' },
  { id: 49, text: 'Người ta mắc hai cực của nguồn điện với một biến trở có thể thay đổi từ 0 đến vô cực. Khi giá trị của biến trở rất lớn thì hiệu điện thế giữa hai cực của nguồn điện là 4,5 V. Giảm giá trị của biến trở đến khi cường độ dòng điện trong mạch là 2 A thì hiệu điện thế giữa hai cực của nguồn điện là 4 V. Suất điện động và điện trở trong của nguồn điện là:', options: ['\\(E = 4,5 V; r = 4,5 \\Omega\\).', '\\(E = 4,5 V; r = 2,5 \\Omega\\).', '\\(E = 4,5 V; r = 0,25 \\Omega\\).', '\\(E = 9 V; r = 4,5 \\Omega\\).'], correct: 'C' },
  { id: 50, text: 'Người ta đun sôi một ấm nước bằng một bếp điện. Ấm tỏa nhiệt ra không khí trong đó nhiệt lượng hao phí tỉ lệ với thời gian đun. Khi hiệu điện thế \\(U_1 = 200V\\) thì sau 5 phút nước sôi, khi hiệu điện thế \\(U_2 = 100V\\) thì sau 25 phút nước sôi. Hỏi nếu khi hiệu điện thế \\(U_3 = 150V\\) thì sau bao lâu nước sôi?', options: ['3,75 phút', '37,5 phút', '9,375 phút', '10 phút'], correct: 'C' },
  { id: 51, text: 'Nguồn điện có suất điện động là 3V và có điện trở trong là \\(1 \\Omega\\). Mắc song song hai bóng đèn giống nhau có cùng điện trở \\(6 \\Omega\\) vào hai cực của nguồn điện này. Công suất tiêu thụ điện của mỗi bóng đèn là', options: ['1,08W.', '0,54W.', '1,28W.', '0,64W.'], correct: 'B' },
  { id: 52, text: 'Số đếm của công tơ điện gia đình cho biết', options: ['thời gian sử dụng điện của gia đình.', 'công suất điện mà gia đình sử dụng.', 'điện năng mà gia đình sử dụng.', 'số dụng cụ và thiết bị điện đang sử dụng.'], correct: 'C' },
  { id: 53, text: 'Trong mạch điện kín gồm có nguồn điện có suất điện động \\(E\\), điện trở trong \\(r\\) và mạch ngoài có điện trở \\(R_N\\), \\(I\\) là cường độ dòng điện chạy trong mạch trong khoảng thời gian \\(t\\). Nhiệt lượng tỏa ra ở mạch ngoài và mạch trong là:', options: ['\\(Q = R_N I^2 t\\)', '\\(Q = (R_N + r)I^2\\)', '\\(Q = (R_N + r)I^2 t\\)', '\\(Q = r I^2 t\\)'], correct: 'C' },
  { id: 54, text: 'Điện năng biến đổi hoàn toàn thành nhiệt năng ở dụng cụ hay thiết bị nào dưới đây khi chúng hoạt động?', options: ['Bóng đèn dây tóc.', 'Quạt điện.', 'Ấm điện.', 'Ắc quy đang được nạp điện.'], correct: 'C' },
  { id: 55, text: 'Trong các pin điện hóa có sự chuyển hóa từ năng lượng nào sang điện năng?', options: ['Hóa năng', 'Nhiệt năng', 'Thế năng đàn hồi', 'Cơ năng'], correct: 'A' },
  { id: 56, text: 'Đối với mạch điện kín gồm nguồn điện với mạch ngoài là điện trở thì cường độ dòng điện chạy trong mạch', options: ['tỉ lệ thuận với điện trở mạch ngoài.', 'tỉ lệ nghịch với điện trở mạch ngoài.', 'giảm khi điện trở mạch ngoài tăng.', 'tăng khi điện trở mạch ngoài tăng.'], correct: 'C' },
  { id: 57, text: 'Hiện tượng đoản mạch xảy ra khi', options: ['nối hai cực của một nguồn điện bằng dây dẫn có điện trở rất nhỏ.', 'sử dụng các dây dẫn ngắn để mắc mạch điện.', 'không mắc cầu chì cho mạch điện kín.', 'dùng pin (hay ắc quy) để mắc một mạch điện kín.'], correct: 'A' },
  { id: 58, text: 'Hai bóng đèn có công suất định mức lần lượt là \\(P_1 < P_2\\) đều làm việc bình thường ở hiệu điện thế \\(U = 6V\\). Cường độ dòng điện qua mỗi bóng đèn và điện trở của hai bóng đèn có mối liên hệ', options: ['\\(I_1 < I_2\\) và \\(R_1 > R_2\\).', '\\(I_1 > I_2\\) và \\(R_1 > R_2\\).', '\\(I_1 > I_2\\) và \\(R_1 < R_2\\).', '\\(I_1 < I_2\\) và \\(R_1 < R_2\\).'], correct: 'A' },
  { id: 59, text: 'Một bếp điện khi hoạt động bình thường có điện trở \\(R = 100 \\Omega\\) và cường độ dòng điện qua bếp là \\(I = 5A\\). Nhiệt lượng tỏa ra trong mỗi giờ là', options: ['2500 J', '2,5 kWh', '500 J', '1500 J'], correct: 'B' },
  { id: 60, text: 'Một hiệu điện thế như nhau mắc vào hai loại mạch: Mạch 1 gồm hai điện trở giống nhau đều bằng \\(R\\) mắc nối tiếp thì dòng điện chạy trong mạch chính là \\(I_1\\), mạch 2 gồm hai điện trở giống nhau cũng đều bằng \\(R\\) mắc song song thì dòng điện chạy trong mạch chính là \\(I_2\\). Mối quan hệ giữa \\(I_1\\) và \\(I_2\\) là:', options: ['\\(I_1 = I_2\\)', '\\(I_2 = 2I_1\\)', '\\(I_2 = 4I_1\\)', '\\(I_2 = 16I_1\\)'], correct: 'C' },
  { id: 61, text: 'Một nguồn có \\(E = 3V, r = 1\\Omega\\) nối với điện trở ngoài \\(R = 1\\Omega\\) thành mạch điện kín. Công suất của nguồn điện là:', options: ['2,25W', '3W', '3,5W', '4,5W'], correct: 'D' },
  { id: 62, text: 'Một nguồn điện có suất điện động là \\(E\\), công của nguồn là \\(A\\), \\(q\\) là độ lớn điện tích dịch chuyển qua nguồn. Mối liên hệ giữa chúng là', options: ['\\(A = q.E\\)', '\\(q = A.E\\)', '\\(E = q.A\\)', '\\(A = q^2.E\\)'], correct: 'A' },
  { id: 63, text: 'Cho dòng điện \\(I\\) chạy qua hai điện trở \\(R_1\\) và \\(R_2\\) mắc nối tiếp. Mối liên hệ giữa nhiệt lượng tỏa ra trên mỗi điện trở và giá trị các điện trở là:', options: ['\\(\\frac{Q_1}{Q_2} = \\frac{R_1}{R_2}\\)', '\\(\\frac{Q_1}{Q_2} = \\frac{R_2}{R_1}\\)', '\\(Q_1 Q_2 = R_1 R_2\\)', '\\(Q_1 R_2 = Q_2 R_1\\)'], correct: 'A' },
  { id: 64, text: 'Trên các thiết bị điện gia dụng thường có ghi 220V và số oát (W). Số oát này có ý nghĩa gì?', options: ['Công suất tiêu thụ điện của dụng cụ khi nó được sử dụng với những hiệu điện thế nhỏ hơn 220V.', 'Công suất tiêu thụ điện của dụng cụ khi nó được sử dụng với đúng hiệu điện thế 220V.', 'Công mà dòng điện thực hiện trong một phút khi dụng cụ này được sử dụng với đúng hiệu điện thế 220V.', 'Điện năng mà dụng cụ tiêu thụ trong một giờ khi nó được sử dụng với đúng hiệu điện thế 220V.'], correct: 'B' },
  { id: 65, text: 'Khi mắc một bóng đèn vào hiệu điện thế 4V thì dòng điện qua bóng đèn có cường độ là 600 mA. Công suất tiêu thụ của bóng đèn này là', options: ['24W.', '2,4W.', '2400 W.', '0,24 W.'], correct: 'B' },
  { id: 66, text: 'Kết luận nào sau đây đúng khi nói về tác dụng của nguồn điện?', options: ['dùng để tạo ra và duy trì hiệu điện thế nhằm duy trì dòng điện trong mạch.', 'dùng để tạo ra các ion âm.', 'dùng để tạo ra các ion dương.', 'dùng để tạo ra các ion âm chạy trong vật dẫn.'], correct: 'A' },
  { id: 67, text: 'Kết luận nào sau đây sai khi nói về suất điện động của nguồn điện?', options: ['Suất điện động của nguồn điện đặc trưng cho khả năng thực hiện công của nguồn điện.', 'Suất điện động của nguồn điện được đo bằng thương số \\(A/q\\).', 'Đơn vị của suất điện động là vôn (V).', 'Suất điện động của nguồn điện đặc trưng cho khả năng tích điện của nguồn điện.'], correct: 'D' },
  { id: 68, text: 'Biểu thức tính công của nguồn điện có dòng điện không đổi là', options: ['\\(A = UIt\\)', '\\(A = EIt\\)', '\\(EIt - rI^2t\\)', '\\(EIt + rI^2t\\)'], correct: 'B' },
  { id: 69, text: 'Số vôn ghi trên pin ALKALINE là 12 V cho biết trị số của', options: ['tụ điện.', 'nguồn điện.', 'công của nguồn điện.', 'suất điện động của nguồn.'], correct: 'D' },
  { id: 70, text: 'Đơn vị đo điện trở là', options: ['ôm (\\(\\Omega\\)).', 'fara (F).', 'henry (H).', 'oát (W).'], correct: 'A' },
  { id: 71, text: 'Phát biểu nào sau đây sai?', options: ['Điện trở có vạch màu là căn cứ để xác định trị số.', 'Đối với điện trở nhiệt có hệ số dương, khi nhiệt độ tăng thì điện trở tăng.', 'Đối với điện trở biến đổi theo điện áp, khi U tăng thì điện trở tăng.', 'Đối với điện trở quang, khi ánh sáng thích hợp rọi vào thì điện trở giảm.'], correct: 'C' },
  { id: 72, text: 'Đặc điểm của điện trở nhiệt có hệ số nhiệt điện trở', options: ['dương khi nhiệt độ tăng thì điện trở tăng.', 'dương khi nhiệt độ tăng thì điện trở giảm.', 'âm khi nhiệt độ tăng thì điện trở tăng.', 'âm khi nhiệt độ tăng thì điện trở giảm về bằng 0.'], correct: 'A' },
  { id: 73, text: 'Khi tiết diện của khối kim loại đồng chất, tiết diện đều tăng 2 lần thì điện trở của khối kim loại', options: ['tăng 2 lần.', 'tăng 4 lần.', 'giảm 2 lần.', 'giảm 4 lần.'], correct: 'C' },
  { id: 74, text: 'Dòng điện trong kim loại là', options: ['dòng dịch chuyển của điện tích.', 'dòng dịch chuyển có hướng của các electron tự do.', 'dòng dịch chuyển có hướng của các hạt mang điện.', 'dòng dịch chuyển có hướng của các ion dương và âm.'], correct: 'B' },
  { id: 75, text: 'Quy ước chiều dòng điện là', options: ['chiều dịch chuyển của các electron.', 'chiều dịch chuyển của các ion.', 'chiều dịch chuyển của các ion âm.', 'chiều dịch chuyển của các điện tích dương.'], correct: 'D' },
  // Câu 76 đã bị trùng với câu 30, bỏ câu 76
  { id: 77, text: 'Cho một mạch điện gồm một pin 1,5 V có điện trở trong 0,5 Ω nối với mạch ngoài là một điện trở 4,5 Ω. Cường độ dòng điện trong toàn mạch là', options: ['0,3A.', '0,25A.', '0,5A.', '3A.'], correct: 'A' },
  { id: 78, text: 'Đặt vào hai đầu một điện trở \\(R\\) một hiệu điện thế \\(U = 12V\\), cường độ dòng điện chạy qua điện trở là 1,5A. Nếu giữ nguyên hiệu điện thế nhưng muốn cường độ dòng điện chạy qua điện trở giảm đi 0,5 A thì ta phải tăng giá trị điện trở thêm một lượng là:', options: ['5,0 Ω', '4,5 Ω', '4,0 Ω', '5,5 Ω'], correct: 'C' },
  { id: 79, text: 'Một dây dẫn bằng kim loại, có diện tích tiết diện thẳng là \\(S = 3,14.10^{-6} m^2\\), cho dòng điện \\(I = 5 A\\) chạy qua dây dẫn. Biết mật độ electron tự do là \\(n = 8,45.10^{28} electron/m^3\\), \\(e = 1,6.10^{-19} C\\). Tốc độ dịch chuyển có hướng của các electron trong dây dẫn xấp xỉ bằng', options: ['8,490 m/s.', '8490 m/s.', '\\(1,178.10^{-4}\\) m/s.', '1,178 m/s.'], correct: 'C' },
  { id: 80, text: 'Điện trở nhiệt là loại điện trở', options: ['giá trị không đổi khi nhiệt độ thay đổi.', 'giá trị giảm khi nhiệt độ thay đổi.', 'giá trị thay đổi khi nhiệt độ thay đổi.', 'giá trị tăng khi nhiệt độ thay đổi.'], correct: 'C' },
  { id: 81, text: 'Cường độ dòng điện chạy trong mạch điện kín', options: ['tỉ lệ thuận với điện trở toàn phần của mạch điện và tỉ lệ nghịch với suất điện động của nguồn điện.', 'tỉ lệ thuận với suất điện động của nguồn điện và tỉ lệ nghịch với điện trở toàn phần của mạch điện đó.', 'tỉ lệ thuận với suất điện động của nguồn điện và tỉ lệ nghịch với điện trở mạch ngoài của mạch điện đó.', 'tỉ lệ thuận với suất điện động của nguồn điện và tỉ lệ nghịch với điện trở trong của mạch điện đó.'], correct: 'B' },
  { id: 82, text: 'Năng lượng điện tiêu thụ của đoạn mạch', options: ['bằng công suất tiêu thụ trên đoạn mạch đó.', 'bằng công của lực điện thực hiện khi di chuyển các điện tích.', 'được đo bằng đơn vị Oát (W).', 'bằng điện năng sử dụng trong một đơn vị thời gian.'], correct: 'B' },
  { id: 83, text: 'Biểu thức liên hệ giữa cường độ dòng điện với mật độ và tốc độ của các hạt mang điện', options: ['\\(I = Snv\\).', '\\(I = Sve\\).', '\\(I = \\frac{nve}{S}\\).', '\\(I = Snve\\).'], correct: 'D' },
  { id: 84, text: 'Dòng điện qua một dây dẫn kim loại có cường độ 2 A. Số electron dịch chuyển qua tiết diện thẳng của dây dẫn này trong 2 s là', options: ['\\(2,5.10^{18}\\).', '\\(2,5.10^{19}\\).', '\\(0,4.10^{19}\\).', '\\(4.10^{19}\\).'], correct: 'B' },
  { id: 85, text: 'Nếu chiều dài và đường kính của một dây dẫn bằng đồng có tiết diện tròn được tăng lên gấp đôi thì điện trở của dây dẫn sẽ', options: ['không thay đổi.', 'tăng lên hai lần.', 'tăng lên gấp bốn lần.', 'giảm đi hai lần.'], correct: 'D' },
  { id: 86, text: 'Biến trở là', options: ['điện trở có thể thay đổi trị số và dùng để điều chỉnh chiều dòng điện trong mạch.', 'điện trở có thể thay đổi trị số và dùng để điều chỉnh cường độ và chiều dòng điện trong mạch.', 'điện trở có thể thay đổi trị số và dùng để điều chỉnh cường độ dòng điện trong mạch.', 'điện trở không thay đổi trị số và dùng để điều chỉnh cường độ dòng điện trong mạch.'], correct: 'C' },
  { id: 87, text: 'Trước khi mắc biến trở vào mạch điện để điều chỉnh cường độ dòng điện thì cần điều chỉnh biến trở có giá trị nào dưới đây?', options: ['Có giá trị bằng 0.', 'Có giá trị nhỏ.', 'Có giá trị lớn.', 'Có giá trị lớn nhất.'], correct: 'D' },
  { id: 88, text: 'Cho mạch điện như hình vẽ. Trong đó, \\(R_1 = R_3 = R_5 = 3\\Omega, R_2 = 8\\Omega, R_4 = 6\\Omega, U_4 = 6 V, U_5 = 6V\\). Cường độ dòng điện chạy qua điện trở \\(R_2\\) là', options: ['1 A.', '1,5 A.', '2 A.', '0,75 A.'], correct: 'A', img: 'vat_li_db/cau_89.png' },
  { id: 89, text: 'Công của nguồn điện là', options: ['lượng điện tích mà nguồn điện sinh ra trong 1 s.', 'công của lực lạ làm dịch chuyển điện tích bên trong nguồn.', 'công của dòng điện trong mạch kín sinh ra trong 1 s.', 'công của dòng điện khi dịch chuyển một điện tích dương trong mạch kín.'], correct: 'A' },
  { id: 90, text: 'Suất điện động của nguồn điện một chiều là \\(\\varepsilon = 3V\\). Công của lực lạ làm dịch chuyển một lượng điện tích \\(q = 2mC\\) giữa hai cực bên trong nguồn điện là', options: ['1,5 mJ.', '0,8 mJ.', '6 mJ.', '5 MJ.'], correct: 'C' }, // Đã sửa nội dung khác câu 4
  { id: 91, text: 'Ba tụ điện giống nhau cùng điện dung \\(C\\) ghép song song với nhau thì điện dung của bộ tụ là:', options: ['\\(C\\)', '\\(2C\\)', '\\(C/3\\)', '\\(3C\\)'], correct: 'D' },
  { id: 92, text: 'Bốn tụ điện mắc thành bộ theo sơ đồ như hình vẽ, \\(C_1 = 1\\mu F; C_2 = C_3 = 3\\mu F\\). Khi nối hai điểm M, N với nguồn điện thì \\(C_1\\) có điện tích \\(q_1 = 6\\mu C\\) và cả bộ tụ có điện tích \\(q = 15,6 \\mu C\\). Hiệu điện thế trên bộ tụ điện là', options: ['1 V', '8V', '6 V', '12 V'], correct: 'D', img: 'https://video.vietjack.com/upload2/quiz_source1/2020/06/p162-1590962394.PNG' },
  { id: 93, text: 'Tụ điện có điện dung \\(2\\mu F\\) có khoảng cách giữa hai bản tụ là 1cm được tích điện với nguồn điện có hiệu điện thế 24V. Ngắt tụ khỏi nguồn và nối hai bản tụ bằng dây dẫn thì năng lượng tụ giải phóng ra là:', options: ['\\(5,76.10^{-4} J\\)', '\\(1,152.10^{-3} J\\)', '\\(2,304.10^{-3} J\\)', '\\(4,217.10^{-3} J\\)'], correct: 'B' },
  { id: 94, text: 'Có bốn chiếc tụ điện như Hình 21.6 (trong sách), hãy sắp xếp theo thứ tự tăng dần về năng lượng khi chúng được tích điện tới mức tối đa cho phép.', options: ['b, d, a, c.', 'b, c, d, a.', 'c, a, b, d.', 'c, b, a, d.'], correct: 'A', img: 'vat_li_db/cau_96.png' },
  { id: 95, text: 'Chọn công thức sai cho hai tụ ghép nối tiếp \\(C_1\\) và \\(C_2\\) với \\(C\\) là điện dung của bộ tụ.', options: ['\\(\\frac{1}{C} = \\frac{1}{C_1} + \\frac{1}{C_2}\\)', '\\(C = \\frac{C_1 C_2}{C_1 + C_2}\\)', '\\(C = C_1 + C_2\\)', '\\(U = U_1 + U_2\\)'], correct: 'C' },
  { id: 96, text: 'Một bộ gồm ba tụ điện ghép song song \\(C_1 = C_2 = \\frac{1}{2} C_3\\). Khi được tích điện bằng nguồn điện có hiệu điện thế 45V thì điện tích của bộ tụ bằng \\(18.10^{-4} C\\). Tính điện dung của các tụ điện.', options: ['\\(C_1 = C_2 = 5\\mu F; C_3 = 10 \\mu F\\)', '\\(C_1 = C_2 = 8\\mu F; C_3 = 16 \\mu F\\)', '\\(C_1 = C_2 = 10\\mu F; C_3 = 20 \\mu F\\)', '\\(C_1 = C_2 = 15\\mu F; C_3 = 30 \\mu F\\)'], correct: 'C' },
  { id: 97, text: 'Chọn công thức sai về năng lượng tụ điện', options: ['\\(W = \\frac{U^2}{2C}\\)', '\\(W = \\frac{QU}{2}\\)', '\\(W = \\frac{Q^2}{2C}\\)', '\\(W = \\frac{CU^2}{2}\\)'], correct: 'A' },
  { id: 98, text: 'Một tụ điện có điện dung \\(2000 \\mu F\\) được tích điện đến hiệu điện thế 10 V. Tính năng lượng của tụ điện.', options: ['0,1 J', '1,1 J', '10 J', '20 J'], correct: 'C' },
  { id: 99, text: 'Cho mạch điện như hình vẽ. Biết \\(E = 12V, r = 1\\Omega, R_1 = 4\\Omega, R_2 = 2\\Omega, R_3 = 6\\Omega\\). Cường độ dòng điện qua \\(R_3\\) là:', options: ['1A', '2A', '3A', '4A'], correct: 'A' },
  { id: 100, text: 'Một nguồn điện có suất điện động \\(E = 6V\\), điện trở trong \\(r = 2\\Omega\\) được mắc với mạch ngoài gồm hai điện trở \\(R_1 = 3\\Omega\\) và \\(R_2 = 6\\Omega\\) mắc song song. Cường độ dòng điện qua nguồn là:', options: ['0,5A', '1A', '1,5A', '2A'], correct: 'A' },
];

if (typeof window !== 'undefined') {
  window.questionsVatLi = questions;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { questions };
}

// PHẦN II – ĐÚNG SAI
const questionsDSVatLi = [
  {id:1, group:'dongdien', text:'Cho những phát biểu sau, phát biểu nào đúng, phát biểu nào sai?',
   stmts:[
    {l:'a',t:'Cu-lông là điện lượng chuyển qua tiết diện thẳng của dây dẫn trong 1 s khi có dòng điện không đổi 1 A chạy qua.',c:true},
    {l:'b',t:'Cường độ dòng điện là đại lượng đặc trưng cho tác dụng mạnh, yếu của dòng điện và được đo bằng điện lượng chuyển qua tiết diện thẳng của vật dẫn trong một đơn vị thời gian.',c:true},
    {l:'c',t:'Dòng điện là dòng các điện tích dịch chuyển có hướng.',c:true},
    {l:'d',t:'Chiều của dòng điện được quy ước là chiều dịch chuyển của các điện tích âm.',c:false}
   ]
  },
  {id:2, group:'dongdien', text:'Dòng điện chạy trong dây dẫn kim loại có các đặc điểm:',
   stmts:[
    {l:'a',t:'Có hạt mang điện tự do là các electron tự do.',c:true},
    {l:'b',t:'Quy ước chiều dòng điện là chiều từ cực âm sang cực dương của nguồn.',c:false},
    {l:'c',t:'Các electron tự do dịch chuyển ngược với chiều quy ước của dòng điện.',c:true},
    {l:'d',t:'Cường độ dòng điện chạy qua dây dẫn kim loại \\(I = Snve\\).',c:true}
   ]
  },
  {id:3, group:'dongdien', text:'Một dây dẫn kim loại có tiết diện ngang \\(S = 0{,}6\\,\\text{mm}^2\\), trong thời gian 10 s có điện lượng \\(q = 9{,}6\\,\\text{C}\\) đi qua. Biết \\(e = 1{,}6\\cdot10^{-19}\\,\\text{C}\\); mật độ electron tự do \\(n = 4\\cdot10^{28}\\,\\text{hạt/m}^3\\).',
   stmts:[
    {l:'a',t:'Cường độ dòng điện qua dây dẫn là 1 A.',c:false},
    {l:'b',t:'Số electron đi qua tiết diện ngang của dây dẫn trong thời gian trên là \\(6\\cdot10^{19}\\) hạt.',c:true},
    {l:'c',t:'Tốc độ trung bình của các electron tạo nên dòng điện là 0,25 mm/s.',c:true},
    {l:'d',t:'Thời gian trung bình mỗi electron dẫn di chuyển hết chiều dài đoạn dây 1 m là 4000 s.',c:true}
   ]
  },
  {id:4, group:'dientro', text:'Một thỏi đồng khối lượng 176 gam được kéo thành dây dẫn có tiết diện tròn, điện trở dây dẫn bằng 32 Ω. Khối lượng riêng của đồng là \\(8{,}8\\cdot10^3\\,\\text{kg/m}^3\\), điện trở suất của đồng là \\(1{,}6\\cdot10^{-8}\\,\\Omega\\text{m}\\).',
   stmts:[
    {l:'a',t:'Thể tích của thỏi đồng là \\(2\\cdot10^{-5}\\,\\text{m}^3\\).',c:true},
    {l:'b',t:'Chiều dài của dây dẫn là 200 cm.',c:false},
    {l:'c',t:'Đường kính tiết diện của dây là 0,36 mm.',c:true},
    {l:'d',t:'Quấn được 100 vòng dây dẫn quanh một ống hình trụ có đường kính 3,6 cm.',c:true}
   ]
  },
  {id:5, group:'dientro', text:'Đường đặc trưng Vôn – Ampe của hai điện trở \\(R_1\\) và \\(R_2\\) được cho như hình.', img:'https://images.tuyensinh247.com/picture/images_question/1743065273-tb3l.jpg',
   stmts:[
    {l:'a',t:'Đường đặc trưng Vôn – Ampe của điện trở là hàm bậc nhất xuất phát từ gốc tọa độ.',c:true},
    {l:'b',t:'Hệ số góc của đường đặc trưng Vôn – Ampe cho chúng ta biết thời gian dòng điện chạy qua điện trở.',c:false},
    {l:'c',t:'Khi U tăng thì \\(R_1\\) tăng nhanh hơn \\(R_2\\).',c:false},
    {l:'d',t:'\\(R_2 = 2{,}5\\,R_1\\).',c:true}
   ]
  },
  {id:6, group:'dientro', text:'Cho mạch điện như hình vẽ. Các giá trị điện trở: \\(R_1 = 2\\,\\Omega\\), \\(R_2 = 3\\,\\Omega\\), \\(R_3 = 4\\,\\Omega\\), \\(R_4 = 6\\,\\Omega\\). Hiệu điện thế giữa hai đầu đoạn mạch \\(U_{AB} = 18\\,\\text{V}\\).', img:'https://vietjack.com/sbt-vat-li-11-kn/images/cau-23-17-trang-56-sbt-vat-li-lop-11.PNG',
   stmts:[
    {l:'a',t:'Mạch cấu tạo gồm \\((R_1 \\parallel R_2)\\) nối tiếp \\((R_3 \\parallel R_4)\\).',c:true},
    {l:'b',t:'Điện trở tương đương của mạch là 3,6 Ω.',c:true},
    {l:'c',t:'Cường độ dòng điện chạy trong mạch chính có độ lớn là 5 A.',c:true},
    {l:'d',t:'Hiệu điện thế hai đầu điện trở \\(R_1\\) là 10 V.',c:false}
   ]
  },
  {id:7, group:'nguon', text:'Một bộ acquy đầy điện có thể cung cấp dòng điện 4 A liên tục trong 2 giờ thì phải nạp lại.',
   stmts:[
    {l:'a',t:'Điện lượng dịch chuyển trong acquy là 28 800 C.',c:true},
    {l:'b',t:'Cường độ dòng điện mà acquy này có thể cung cấp liên tục trong 40 giờ thì phải nạp lại là 0,25 A.',c:false},
    {l:'c',t:'Nếu trong thời gian hoạt động trên đây, nó sinh ra một công là 172,8 kJ thì suất điện động của acquy là 3 V.',c:false},
    {l:'d',t:'Nếu acquy có suất điện động bằng 9 V thì trong thời gian hoạt động trên nó sinh ra một công là 259,2 kJ.',c:true}
   ]
  },
  {id:8, group:'nguon', text:'Một nguồn điện có suất điện động 12 V, điện trở trong \\(2\\,\\Omega\\). Khi mắc với một bóng đèn tạo thành mạch điện kín thì dòng chạy qua có cường độ 0,5 A.',
   stmts:[
    {l:'a',t:'Nguồn điện tạo ra hiệu điện thế giữa hai cực bằng cách tách electron ra khỏi nguyên tử và chuyển electron và ion về các cực của nguồn.',c:false},
    {l:'b',t:'Điện lượng dịch chuyển qua tiết diện thẳng của dây tóc trong 10 phút là 350 C.',c:false},
    {l:'c',t:'Số electron dịch chuyển qua tiết diện thẳng của dây tóc trong 10 phút là \\(18{,}75\\cdot10^{20}\\) hạt.',c:true},
    {l:'d',t:'Độ lớn công cần thiết của nguồn điện để dịch chuyển một electron từ cực dương sang cực âm của nguồn là \\(1{,}92\\cdot10^{-18}\\,\\text{J}\\).',c:true}
   ]
  },
  {id:9, group:'nguon', text:'Một nguồn điện có suất điện động 11,5 V và điện trở trong \\(0{,}8\\,\\Omega\\) được nối với mạch ngoài tạo thành mạch kín. Nguồn phát dòng điện có cường độ 1 A.',
   stmts:[
    {l:'a',t:'Hiệu điện thế hai đầu nguồn điện bằng 10,7 V.',c:true},
    {l:'b',t:'Công do nguồn điện sản sinh ra trong 2 phút bằng 23 J.',c:false},
    {l:'c',t:'Tốc độ sinh công của nguồn điện trong 1 s bằng 11,5 W.',c:true},
    {l:'d',t:'Công suất điện mà nguồn cung cấp cho mạch ngoài bằng 10,7 W.',c:true}
   ]
  },
  {id:10, group:'nguon', text:'Mạch điện gồm 3 điện trở \\(R_1 = 4\\,\\Omega\\), \\(R_2 = 6\\,\\Omega\\), \\(R_3 = 12\\,\\Omega\\) mắc song song với nhau rồi mắc thành mạch điện kín với nguồn điện có suất điện động \\(E = 6\\,\\text{V}\\), điện trở trong \\(r = 1\\,\\Omega\\).',
   stmts:[
    {l:'a',t:'Độ giảm thế ở mạch ngoài có giá trị bằng suất điện động của nguồn.',c:false},
    {l:'b',t:'Khi điện trở trong của nguồn tăng thì hiệu điện thế giữa hai cực của nguồn tăng.',c:false},
    {l:'c',t:'Công của lực lạ khi di chuyển lượng điện tích 0,12 C qua nguồn là 0,36 J.',c:false},
    {l:'d',t:'Cường độ dòng điện trong mạch điện kín là 2 A.',c:true}
   ]
  },
  {id:11, group:'nangluong', text:'Trên một bóng đèn dây tóc có ghi 12 V − 18 W.',
   stmts:[
    {l:'a',t:'Bóng đèn này luôn có công suất là 18 W khi hoạt động.',c:false},
    {l:'b',t:'Bóng đèn này có cường độ dòng điện định mức là 1,5 A.',c:true},
    {l:'c',t:'Bóng đèn này tiêu thụ điện năng 30 J trong 2 giây khi hoạt động bình thường.',c:false},
    {l:'d',t:'Bóng đèn này có điện trở \\(8\\,\\Omega\\) khi hoạt động bình thường.',c:true}
   ]
  },
  {id:12, group:'nangluong', text:'Một quạt điện được sử dụng dưới hiệu điện thế 220 V thì dòng điện chạy qua quạt có cường độ 5 A. Biết giá điện là 2 000 đồng/kWh.',
   stmts:[
    {l:'a',t:'Tốc độ tiêu thụ năng lượng của quạt là 1 100 J trong mỗi giây.',c:true},
    {l:'b',t:'Trong 8 giờ quạt tiêu thụ năng lượng là 8 800 J.',c:false},
    {l:'c',t:'Quạt đã chuyển hóa năng lượng điện thành cơ năng (năng lượng có ích).',c:true},
    {l:'d',t:'Tiền điện phải trả cho việc sử dụng quạt trong 30 ngày, mỗi ngày sử dụng 30 phút là 33 000 đồng.',c:true}
   ]
  }
];

if (typeof window !== 'undefined') {
  window.questionsDSVatLi = questionsDSVatLi;
}

// PHẦN III – TỰ LUẬN
const questionsTLVatLi = [
  {
    id: 1,
    text: 'Một tụ điện có điện dung \\(2\\,\\mu F\\) được tích điện ở hiệu điện thế 12 V. Năng lượng điện trường dự trữ trong tụ điện là bao nhiêu \\(\\mu J\\)?',
    numStr: '144', numeric: 144,
    answer: '\\(W = \\dfrac{CU^2}{2} = \\dfrac{2\\cdot10^{-6}\\cdot12^2}{2} = 144\\,\\mu J\\)'
  },
  {
    id: 2,
    text: 'Ba tụ điện ghép nối tiếp có \\(C_1 = 20\\,pF\\), \\(C_2 = 10\\,pF\\), \\(C_3 = 20\\,pF\\). Điện dung của bộ tụ đó bằng bao nhiêu pF?',
    numStr: '5', numeric: 5,
    answer: '\\(\\tfrac{1}{C}=\\tfrac{1}{20}+\\tfrac{1}{10}+\\tfrac{1}{20}=\\tfrac{4}{20} \\Rightarrow C=5\\,pF\\)'
  },
  {
    id: 3,
    text: 'Một tụ điện phẳng có điện môi là không khí, điện dung \\(C = 2\\,\\mu F\\), khoảng cách giữa hai bản tụ \\(d = 1\\,mm\\). Biết điện trường giới hạn đối với không khí là \\(E_{gh} = 3 \\cdot 10^6\\,V/m\\). Năng lượng tối đa mà tụ tích trữ được là bao nhiêu J?',
    numStr: '9', numeric: 9,
    answer: '\\(U_{max}=E_{gh}\\cdot d=3000\\,V \\Rightarrow W_{max}=\\dfrac{CU_{max}^2}{2}=9\\,J\\)'
  },
  {
    id: 4,
    text: 'Trong một dây dẫn điện bằng đồng có cường độ dòng điện \\(I = 10{,}0\\,A\\). Biết dây đồng có tiết diện \\(S = 3{,}00 \\cdot 10^{-6}\\,m^2\\), khối lượng riêng \\(\\rho = 8{,}92\\,g/cm^3\\), khối lượng mol \\(M = 63{,}5\\,g/mol\\), số Avogadro \\(N_A = 6{,}02 \\cdot 10^{23}\\,nguyên\\,tử/mol\\). Mỗi nguyên tử đồng đóng góp một electron tự do. Tốc độ dịch chuyển có hướng của các electron theo đơn vị mm/s?',
    numStr: '0,246', numeric: 0.246,
    answer: '\\(n=\\tfrac{\\rho N_A}{M}\\approx8{,}46\\cdot10^{28}\\,e/m^3\\)<br>\\(v=\\tfrac{I}{neSt}=\\tfrac{10}{8{,}46\\cdot10^{28}\\cdot1{,}6\\cdot10^{-19}\\cdot3\\cdot10^{-6}}\\approx0{,}246\\,mm/s\\)'
  },
  {
    id: 5,
    text: 'Nguồn điện có \\(\\mathcal{E} = 12\\,V\\), \\(r = 4\\,\\Omega\\) được dùng thắp sáng bóng đèn \\(6\\,V - 6\\,W\\). Để đèn sáng bình thường phải mắc nối tiếp với đèn một điện trở \\(R\\). Tính \\(R\\) (\\(\\Omega\\))?',
    numStr: '2', numeric: 2,
    answer: '\\(I_{đèn}=\\tfrac{P}{U}=1\\,A\\)<br>\\(U_R=\\mathcal{E}-U_{đèn}-Ir=12-6-4=2\\,V\\)<br>\\(R=\\tfrac{U_R}{I}=2\\,\\Omega\\)'
  },
  {
    id: 6,
    text: 'Cho hai bóng đèn dây tóc: \\(60\\,V - 30\\,W\\) và \\(25\\,V - 12{,}5\\,W\\). Mắc hai bóng vào nguồn có \\(\\mathcal{E} = 66\\,V\\), \\(r = 1\\,\\Omega\\) theo sơ đồ như hình. Biết các bóng sáng bình thường. Giá trị của \\(R_1\\) bằng bao nhiêu \\(\\Omega\\)?',
    img: 'https://video.vietjack.com/upload2/quiz_source1/2020/04/29-1587228983.PNG',
    numStr: '70', numeric: 70,
    answer: '\\(R_1 = 70\\,\\Omega\\)'
  },
  {
    id: 7,
    text: 'Cho mạch điện như hình vẽ. Nguồn điện có \\(\\mathcal{E} = 30\\,V\\), \\(r = 1\\,\\Omega\\). Các điện trở \\(R_1 = 12\\,\\Omega\\), \\(R_2 = 36\\,\\Omega\\), \\(R_3 = 18\\,\\Omega\\). Bỏ qua điện trở ampe kế. Ampe kế chỉ bao nhiêu A?',
    img: 'https://images.tuyensinh247.com/picture/2020/0328/1_12.PNG',
    numStr: '0,8', numeric: 0.8,
    answer: '\\(I_A = 0{,}8\\,A\\)'
  },
  {
    id: 9,
    text: 'Nguồn điện có \\(\\mathcal{E} = 12\\,V\\), \\(r = 2\\,\\Omega\\) nối với mạch ngoài AB: \\(R_1 = 4{,}5\\,\\Omega\\); \\(R_2 = 1{,}5\\,\\Omega\\); \\(R_3 = 9{,}0\\,\\Omega\\); \\(R_4\\) là biến trở.<br><br><strong>1.</strong> K mở, \\(R_4 = 2{,}4\\,\\Omega\\). Số chỉ ampe kế (A)?<br><strong>2.</strong> Thay K bằng vôn kế (\\(R_V \\to \\infty\\)), \\(R_4 = 2{,}4\\,\\Omega\\). Số chỉ vôn kế (V)?<br><strong>3.</strong> Điều chỉnh \\(R_4\\) sao cho khi K đóng và K mở, số chỉ ampe kế không đổi. \\(R_4\\) (\\(\\Omega\\))?',
    img: 'vat_li_db/cau9-tln.png',
    parts: [
      { label: '1.', numStr: '0,6',  numeric: 0.6,  answer: '\\(I_A = 0{,}6\\,A\\)' },
      { label: '2.', numStr: '0,36', numeric: 0.36, answer: '\\(U_V = 0{,}36\\,V\\)' },
      { label: '3.', numStr: '4,5',  numeric: 4.5,  answer: '\\(R_4 = 4{,}5\\,\\Omega\\)' },
    ],
    answer: '<strong>1.</strong> \\(I_A=0{,}6\\,A\\) &nbsp; <strong>2.</strong> \\(U_V=0{,}36\\,V\\) &nbsp; <strong>3.</strong> \\(R_4=4{,}5\\,\\Omega\\)'
  },
  {
    id: 11,
    text: 'Nguồn điện có \\(\\mathcal{E} = 12\\,V\\), điện trở trong \\(r\\). Khi mắc vào hai cực nguồn các điện trở \\(R_1 = 2\\,\\Omega\\) và \\(R_2 = 4{,}5\\,\\Omega\\) thì công suất tỏa nhiệt trên các điện trở bằng nhau. Điện trở trong của nguồn là bao nhiêu \\(\\Omega\\)?',
    numStr: '3', numeric: 3,
    answer: '\\(r = 3\\,\\Omega\\)'
  },
  {
    id: 12,
    text: 'Một bếp điện được sử dụng liên tục trong 1,6 giờ, chỉ số trên công tơ điện tăng 2,4 kWh. Công suất tiêu thụ của bếp là bao nhiêu kW?',
    numStr: '1,5', numeric: 1.5,
    answer: '\\(P=\\dfrac{W}{t}=\\dfrac{2{,}4}{1{,}6}=1{,}5\\,kW\\)'
  },
  {
    id: 13,
    text: 'Tháng 6, một gia đình dùng các thiết bị điện (mỗi ngày):<br><table style="border-collapse:collapse;font-size:14px;margin:8px 0"><tr><th style="border:1px solid var(--bdr);padding:5px 10px">Thiết bị</th><th style="border:1px solid var(--bdr);padding:5px 10px">Số lượng</th><th style="border:1px solid var(--bdr);padding:5px 10px">Công suất</th><th style="border:1px solid var(--bdr);padding:5px 10px">Thời gian</th></tr><tr><td style="border:1px solid var(--bdr);padding:5px 10px">Tủ lạnh</td><td style="border:1px solid var(--bdr);padding:5px 10px;text-align:center">1</td><td style="border:1px solid var(--bdr);padding:5px 10px">60 W</td><td style="border:1px solid var(--bdr);padding:5px 10px">24 h</td></tr><tr><td style="border:1px solid var(--bdr);padding:5px 10px">Tivi</td><td style="border:1px solid var(--bdr);padding:5px 10px;text-align:center">2</td><td style="border:1px solid var(--bdr);padding:5px 10px">145 W</td><td style="border:1px solid var(--bdr);padding:5px 10px">4 h</td></tr><tr><td style="border:1px solid var(--bdr);padding:5px 10px">Bóng đèn</td><td style="border:1px solid var(--bdr);padding:5px 10px;text-align:center">3</td><td style="border:1px solid var(--bdr);padding:5px 10px">75 W</td><td style="border:1px solid var(--bdr);padding:5px 10px">5 h</td></tr><tr><td style="border:1px solid var(--bdr);padding:5px 10px">Máy lạnh</td><td style="border:1px solid var(--bdr);padding:5px 10px;text-align:center">4</td><td style="border:1px solid var(--bdr);padding:5px 10px">1100 W</td><td style="border:1px solid var(--bdr);padding:5px 10px">8 h</td></tr><tr><td style="border:1px solid var(--bdr);padding:5px 10px">Quạt</td><td style="border:1px solid var(--bdr);padding:5px 10px;text-align:center">5</td><td style="border:1px solid var(--bdr);padding:5px 10px">65 W</td><td style="border:1px solid var(--bdr);padding:5px 10px">10 h</td></tr></table>Giá điện theo bậc thang (VNĐ/kWh): 1–50: 1484 · 51–100: 1533 · 101–200: 1786 · 201–300: 2242 · 301–400: 2503 · ≥401: 2587.<br>Số tiền điện phải trả trong 30 ngày là bao nhiêu nghìn VNĐ (3 chữ số thập phân)?',
    numStr: '3042,352', numeric: 3042.352,
    answer: '3042,352 nghìn VNĐ<br><small style="color:var(--txt2)">Tổng tiêu thụ: 1265,25 kWh</small>'
  },
];

if (typeof window !== 'undefined') {
  window.questionsTLVatLi = questionsTLVatLi;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports.questionsTLVatLi = questionsTLVatLi;
}