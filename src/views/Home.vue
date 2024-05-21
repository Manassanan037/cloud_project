<template>
    <!-- banner start -->
    <div class="banner">
        <div class="banner-info">
            <h1>The Little Prince</h1>
            <p>เจ้าชายน้อย</p>

        </div>
    </div>

    <!-- banner End -->


    <!-- about Start -->
    <div class="about_author">
        <h1 id="author_heading" onclick="toggleColor()">ประวัติผู้เขียน เจ้าชายน้อย</h1>
    </div>

    <div class="profile_author">
        <img src="/licensed-image.jpg" alt="">
        <p> <strong>"อ็องตวน เดอ แซ็งแตกซูว์เปรี"</strong><br>
            แรกเริ่มเดิมที แซ็งแตกซูว์เปรี ผู้ประพันธ์ มีจุดประสงค์เขียนเพื่อเสียดสีสังคมเท่านั้น
            ทว่าเนื้อหาที่มีแง่คิดดี ๆ
            เหล่านี้ได้ถูกนักวิจัยจัดให้งานเขียนชิ้นนี้อยู่ในกลุ่มของวรรณกรรมเยาวชนแทนในเวลาต่อมา
            เป็นนักเขียนและนักบินชาวฝรั่งเศส เกิดเมื่อวันที่ 29 มิถุนายน ค.ศ. 1900 มีงานเขียนเป็นจำนวนมากในภาษาฝรั่งเศส<br>
            ผลงานที่มีชื่อเสียงที่สุดคือ "เจ้าชายน้อย"<br>
            <a class="btn_author" href="https://th.wikipedia.org/wiki/อ็องตวน_เดอ_แซ็งแตกซูว์เปรี"
                target="_blank"><span>อ่านเพิ่มเติม</span></a>

        </p>
    </div>

    <!-- about end -->

    <div class="performance_author">
        <h1>นวนิยายที่โด่งดัง ของ อ็องตวน เดอ แซ็งแตกซูว์เปรี</h1>
    </div>
    <section>
        <div class="section_book">
            <input id="ch" type="checkbox">
            <h1 class="book_text">Courrier-Sud<br>ไปรษณีย์ใต้</h1>
            <img src="/Courrier_sud.jpg">
            <div class="content">
                <p>ปรัชญาและความหมายแห่งการแสวงหาจาก "งานบิน"
                    ผูกพันเป็นหนึ่งเดียวกับปรัชญาและความหมายแห่งการแสวงหาในนามของ "ชีวิต"
                    การบุกเบิกเส้นทางบินไปรษณีย์เที่ยวกลางคืน จึงดำเนินควบคู่ไปกับการหวนรำลึกถึงขั้นตอนชีวิตที่ผ่านมา
                    สายตาซึ่งมองลงมายังพื้นโลกจากที่สูงเป็นหมื่นฟุตจึงเป็นสายตาที่ใคร่ครวญถึงความ "เป็นไป" และ
                    "เป็นอยู่"
                    ของชีวิตบนโลกและการเผชิญหน้ากับความตายก็คือห้วงเวลาแห่งการค้นพบความหมายของการมีชีวิตอยู่
                </p>
                <label for="ch" id="less_label">น้อยลง</label>
            </div>
            <label for="ch" id="more_label">อ่านเพิ่มเติม</label>
        </div>

        <div class="section_book">
            <input id="ch2" type="checkbox">
            <h1 class="book_text">Vol de nuit<br>เที่ยวบินกลางคืน</h1>
            <img src="/Voldenuit.jpg">
            <div class="content2">
                <p>นวนิยายที่จะพาคุณไปสัมผัสกับความหมายและคุณค่าจากการแสวงหาด้วยการบิน ตัวละครใน "เที่ยวบินกลางคืน"
                    ต้องต่อสู้กับจิตใจของตัวเอง ซึ่งหลายขณะแซงแต็กซูเปรีกล้าที่จะวาดภาพให้เห็นว่า
                    จิตใจเช่นนั้นคือจิตใจแห่งความเป็นมนุษย์โดยจริงแท้
                    และความยิ่งใหญ่ของตัวละครซึ่งแซงแต็กซูเปรีให้ความชื่นชม
                    ก็คือความกล้าที่จะทะยายขึ้นไปอยู่เหนือจิตใจแห่งความเป็นมนุษย์ดังกล่าว
                    นักบินของเขาไม่ได้ต่อสู้กับความมืดรายรอบ ไม่ได้ต่อสู้กับพายุไซโคลนซึ่งโหมกระหน่ำ
                    อีกทั้งไม่ได้ต่อสู้เพื่อให้ชีวิตตัวเองอยู่รอด
                    ทว่า...พวกเขาต่อสู้เพื่อเที่ยวบินกลางคืนในแต่ละเที่ยวและอีกหลายๆ พันเที่ยวที่จะตามมา
                    การเอาชนะกลางคืนและพายุไซโคลนมิได้ให้ความหมายว่าพวกเขากำชัยเหนือธรรมชาติ
                    การต่อสู้อันดุเดือดและเต็มไปด้วยอันตรายมีความหมายเพียงแค่ "ความรับผิดชอบในหน้าที๋" เท่านั้นเอง
                    ทว่า...เพียงแค่นี้ก็เกินพอแล้วที่พวกเขาจะเหนี่ยวนำ "ความยิ่งใหญ่" มาบรรจุไว้ในมนุษย์ผู้อ่อนแอ</p>

                <label for="ch2">น้อยลง</label>
            </div>
            <label for="ch2">อ่านเพิ่มเติม</label>
        </div>

        <div class="section_book">
            <input id="ch3" type="checkbox">
            <h1 class="book_3_text">Terre des Hommes<br>แผนดินของเรา</h1>
            <img src="/Terre.jpg">
            <div class="content3">
                <p>“แผ่นดินของเรา”
                    “ไปรษณีย์ใต้” แซงแต็กซูเปรีให้ความรำลึกย้อน
                    หลังหลายๆ เหตุการณ์มาประกอบขึ้นด้วยภาพพจน์อย่างกวีนิพนธ์
                    เพื่อฉายภาพความหมายของชีวิตที่เขาเห็นและรู้สึก
                    ความรำลึกย้อนหลังนั้นเป็นทั้งความทรงจำของตัวเขาเอง
                    และความทรงจำเกี่ยวกับเพื่อนรักของเขาที่ชื่อกิโยเมซึ่งเขาอุทิศหนังสือเล่มนี้ให้
                    ทั้งหมดของความทรงจำนั้นคือ ความรู้สึกขณะมุนษย์เผชิญหน้ากับความตาย ภาวะขณะที่กำลัง
                    ต่อสู้กับมันเพื่อตีฝ่าออกมาให้ได้
                    และภาวะเช่นนี้เองที่แซงแต็กเปรีเชื่อมั่นว่าทำให้มนุษย์รู้จักและเข้าถึงความหมายของคำว่า “ชีวิต”</p>
                <label for="ch3">น้อยลง</label>
            </div>
            <label for="ch3">อ่านเพิ่มเติม</label>
        </div>

        <div class="section_book">
            <input id="ch4" type="checkbox">
            <h1 class="book_text">Le Petit Prince<br>เจ้าชายน้อย</h1>
            <img src="/little_pirce.jpg">
            <div class="content4">

                <p>“เจ้าชายน้อย” เป็นเรื่องราวของเด็กชายคนหนึ่ง ผู้มาจากดาวแคระ B612 เขามีปัญหาไม่เข้าใจดอกกุหลาบ
                    [ความรัก]
                    ของตน จึงออกเดินทางไปยังดาวต่าง ๆ เพื่อหวังว่าจะได้เข้าใจชีวิตมากขึ้น กระทั่งเมื่อมาถึงโลก
                    เด็กชายได้พบกับนักบินคนหนึ่ง ที่เครื่องบินของเขาเสียอยู่กลางทะเลทรายในทวีปแอฟริกา
                    ผู้แต่งให้นักบินเป็นคนเล่าเรื่องราวของเด็กน้อย (ภายหลังจากเหตุการณ์ผ่านไปแล้ว 6 ปี)
                    การพูดคุยระหว่างนักบินกับเจ้าชายน้อย เป็นการเสนอมุมมองที่ต่างกันของผู้ใหญ่ และเด็ก โดยตลอดทั้งเรื่อง
                </p>
                <label for="ch4">น้อยลง</label>
            </div>
            <label for="ch4">อ่านเพิ่มเติม</label>
        </div>
    </section>

    <div class="performance_author_edit">
        <h1>ผลงานที่ถูกดัดแปลงจาก นวนิยาย เจ้าชายน้อย</h1>
    </div>

    <!-- main start -->
    <main>
        <div class="manga_main">
            <h1 class="main_text">ฉบับมังงะ</h1>
            <a href="https://www.naiin.com/product/detail/599926" target="_blank">
                <img src="/little_manga.jpg" alt="">
            </a>

        </div>

        <div class="video_main">
            <h1 class="main_text">ฉบับภาพยนต์</h1>
            <a href="http://www.boomerangshop.com/web/index.php/app/product/fnc/detail/id/1225512" target="_blank">
                <img src="/products.jpg" alt="">
            </a>
        </div>


        <div class="catoon_main">
            <a href="" class=""></a>
            <h1 class="main_text">ฉบับการ์ตูน</h1>
            <img src="/กดเพื่อดูคลิป (1).png" alt="">
            
            
        </div>



    </main>
    <!-- main end-->

    <!-- Footer start -->
    <footer class="site_footer">
        <div class="footer_text">
            <h1>แสดงความคิดเห็น</h1>
        </div>
        <div class="container my-3">
            <form id="addnew">
                <div class="form-group_name">
                    <label for="name" text>ชื่อ</label>
                    <input type="text" class="form-control" name="name_c" id="name_c">
                </div>

                <div class="form-group_comment">
                    <label for="detail">ความคิดเห็น</label>
                    <input type="text" class="form-control" detail="detail_c" id="detail_c">

                </div>
                <div class="form-group_my_3">
                    <button type="submit" class="btn btn-success">โพสต์</button>

                </div>

            </form>

            <table class="table table-bordered" id="table_c">
                <tr>
                    <th>ชื่อผู้คิดเห็น</th>
                    <th>ความคิดเห็น</th>
                </tr>

            </table>

        </div>
    </footer>
    <!-- Footer End -->
</template>
