let planXML = `
<Plan object="VVSU">
  <Exit id="2" name="Вход 2" floor="3" show_name="1" />
 
  <Floor num="3">
    <Path start="2" type="left_right_walls" dir="up">
      <Point id="near_exit2" name="у входа 2" />
      <Path start="near_exit2" rotate="left" type="no_walls">
        <Point name="Андеграунд" show_name="1" />
      </Path>
      <Room name="Кофейня" location="left" />
      <Door/>
      <Point id="exit2_exit2" name="Exit" />
      <Path rotate="left" start="exit2_exit2" type="no_walls">
        <Point/>
        <Point id="exit2_exit2_left" name="Угол" />
        <Path rotate="right" type="left_wall" start="exit2_exit2_left">
          <Room name="Лестница" location="left" />
          <Room name="Буфет" location="left" />
          <Room name="Голубиная падь" location="left" />
          <Door id="door_golub_pad" />
          <Path rotate="left" type="left_right_walls" start="door_golub_pad">
            <Point id="corner1" name="Кафе" location="left" show_name="1" />
            <Room location="right" name="Студотряды" />
            <Stairs id="stairs1" name="Лестница" />
            <Path start="corner1" rotate="right" type="left_right_walls">
               <Point />
               <Point id="corner2" name="Угол" />
               <Path start="corner2" rotate="forward" type="left_wall">
                 <Stairs id="stairs10" name="Лестница" />
                 <Room location="left" id="1306" name="ToiletM" />
                 <Room location="left" id="1308" name="ToiletW" />
                 <Path start="1308" rotate="forward" type="left_right_walls">
                   <Room name="Блинная" />
                   <Door id="kaf_mark_torg_begin" name="Кафедра маркетинга и торговли" show_name="1" />
                   <Path rotate="forward" start="kaf_mark_torg_begin" type="left_right_walls">
                     <Room id="4301" location="right" />
                     <Room id="4303" location="right" />
                     <Room id="4305" location="right" />
                     <Room id="4307" location="right" />
                     <Room id="4309" location="right" />
                     <Room id="4311" location="right" />
                     <Room id="4313" location="right" />
                     <Room id="4315" location="right" />
                     <Point id="near_stairs2" />
                     <Path rotate="left" start="near_stairs2" type="left_right_walls">
                       <Room location="left" id="4302" />
                     </Path>
                     <Path rotate="forward" start="near_stairs2" type="left_walls">
                       <Stairs id="stairs2" name="Лестница" />
                       <Path rotate="right" start="stairs2" type="left_right_walls">
                         <Point id="corridor_4.2_near_stairs" />
                         <Path rotate="left" start="corridor_4.2_near_stairs" type="left_right_walls">
                           <Room location="left" id="4401" />
                           <Room location="left" id="4403" />
                           <Room location="left" id="4405" />
                           <Room location="right" id="4402" />
                           <Room location="left" id="4407" />
                           <Room location="left" id="4409" /> 
                           <Room location="left" id="4411" />
                           <Room location="left" id="4413" />
                           <Room location="right" id="4404" />
                           <Room location="right" id="4406" />
                         </Path>
                       </Path>
                     </Path>
                   </Path>
                 </Path>
               </Path>
            </Path>
          </Path>
        </Path>
      </Path>
      <Path rotate="right" start="exit2_exit2" type="no_walls">
        <Point/>
        <Point id="exit2_exit2_right" name="Угол" />
        <Path rotate="left" type="right_wall" start="exit2_exit2_right">
          <Room name="Буфет" location="right" />
          <Room name="Точка кипения" location="right" />  
          <Room name="Столовая" location="right" />
          <Room name="Столовая" location="right" />
          <Room id="1311" location="right" />
          <Room id="1313" name="1313" location="right" />
          <Path start="1313" rotate="left" type="left_right_walls">
            <Room location="left" id="1309" />
            <Room location="right" id="1312" />
            <Room location="left" id="1307" />
            <Room location="right" id="1310" />
            <Point id="corner2" />
          </Path>
          <Path start="1313" rotate="forward" type="left_right_walls">
            <Room location="right" id="1315" />
            <Room location="right" id="1317" />
            <Room location="left" id="1314" />
            <Room location="left" id="1316" />
            <Room location="right" id="1319" />
            <Room location="left" id="1318" />
            <Room location="left" id="1320" />
            <Room location="left" id="1322" />
            <Room location="left" id="1324" />
            <Room location="right" id="1321" />
            <Room location="left" id="1326" />
            <Room location="right" id="1323" />
            <Room location="left" id="1328" />
            <Room location="right" id="1325" />
            <Room location="left" id="1330" />
            <Room location="right" id="1327" />
            <Room location="left" id="1332" />
            <Room location="right" id="1331" />
            <Room location="right" id="1329" />
            <Room location="left" id="1334" />
            <Path start="1334" rotate="right" type="left_wall">
              <Stairs id="big_stairs" name="Большая лестница" />
              <Path start="big_stairs" rotate="left" type="left_right_walls">
                <Room location="left" id="1336" />
                <Room location="right" id="1333" />
                <Room location="right" id="1335" />
                <Room location="left" id="1338" />
                <Door />
                <Room location="right" id="1337" />
                <Room location="left" id="1340" />
                <Room location="right" id="1339" />
                <Room location="left" id="1342" />
                <Room location="left" id="1344" />
                <Room location="left" id="1346" />
                <Room location="right" id="1341" />
                <Point name="Зона отдыха" show_name="1" />
                <Room location="left" id="1348" />
                <Room location="right" id="1343" />
                <Room location="left" id="1350" />
                <Room location="right" id="1345" />
                <Room location="left" id="1352" />
                <Point name="Касса" location="right" show_name="1" />
                <Room location="left" id="1354" />
                <Room location="right" id="1349" />
                <Room location="left" id="1356" />
                <Room location="right" id="1351" />
                <Room location="right" id="1353" />
                <Room location="left" id="1358" />
                <Stairs id="stairs5" name="Лестница" />
              </Path>
            </Path>
          </Path>
        </Path>
      </Path>
    </Path>
  </Floor>
 

  <Exit id="1" name="Вход 1" floor="1" show_name="1" />
  <Floor num="1">
   
    <Path start="1" type="right_wall" dir="up">
      <Point id="near_exit1" />
      <Room location="right" name="Лотос" />
      <Stairs id="stairs5" name="Лестница" />
      <Path start="near_exit1" rotate="left" type="left_right_walls">
        <Room location="right" name="Гардероб" />
        <Room location="right" id="1140" />
        <Room location="left" id="1131" />
        <Room location="left" id="1129" />
        <Room location="left" id="1127" />
        <Room location="left" id="1125" />
        <Room location="right" id="1132" />
        <Room location="right" id="1130" />
        <Room location="left" id="1123" />
        <Room location="right" id="1128" />
        <Room location="right" id="1126" />
        <Point id="near_big_stairs_1" />
        <Path rotate="left" start="near_big_stairs_1" type="left_right_walls">
          <Room location="left" id="1119" />
          <Room location="right" id="1117" />
        </Path>
        <Path rotate="forward" start="near_big_stairs_1" type="left_walls">
          <Stairs id="big_stairs" />
          <Path rotate="right" start="big_stairs" type="left_right_walls">
            <Point id="corridor_1_near_stairs" />
            <Path rotate="left" start="corridor_1_near_stairs" type="left_right_walls">
              <Room id="1115" location="left" />
              <Room id="1113" location="left" />
              <Room id="1111" location="left" />
              <Room id="1114" location="right" />
              <Room id="1109" location="left" />
              <Room id="1107" location="left" />
              <Room id="1112" location="right" />
              <Room id="1105" location="left" />
              <Room id="1102" location="right" />
            </Path>
          </Path>
        </Path>
      </Path>
    </Path>
  </Floor>

  <Floor num="2">
    <Stairs id="stairs5" name="Лестница" />
    <Path start="stairs5" type="left_right_walls" dir="up"> 
      <Point id="near_stairs5.2" />
      <Room location="left" id="Библиотека" />
      <Path start="near_stairs5.2" rotate="right" type="left_right_walls"> 
        <Room location="right" id="1236" />
        <Room location="left" id="1233" />
        <Room location="right" id="1234" />
        <Room location="left" id="1231" />
        <Room location="right" id="1232" />
        <Room location="left" id="1229" />
        <Room location="right" id="1230" />
        <Room location="right" id="1228" />
        <Room location="left" id="1227" />
        <Room location="right" id="1226" />
        <Room location="right" id="1224" />
        <Room location="left" id="1225" />
        <Room location="right" id="1222" />
        <Room location="left" id="1223" />
        <Point id="near_big_stairs_2" />
        <Path rotate="left" start="near_big_stairs_2" type="left_right_walls">
          <Room location="left" id="1221" />
          <Room location="right" id="1218" />
          <Room location="left" id="1219" />
        </Path>
        <Path rotate="forward" start="near_big_stairs_2" type="left_walls">
          <Stairs id="big_stairs" />
          <Path rotate="right" start="big_stairs" type="left_right_walls">
            <Point id="corridor_2_near_stairs" />
            <Path rotate="left" start="corridor_2_near_stairs" type="left_right_walls">
              <Room id="1216" location="right" />
              <Room id="1214" location="right" />
              <Room id="1215" location="left" />
              <Room id="1212" location="right" />
              <Room id="1210" location="right" />
              <Room id="1213" location="left" />
              <Room id="1208" location="right" />
              <Room id="1211" location="left" />
              <Room id="1206" location="right" />
              <Room id="1209" location="left" />
              <Room id="1204" location="right" />
              <Room id="1207" location="left" />
              <Room id="1205" location="left" />
              <Room id="1203" location="left" />
              <Room id="1202" location="right" />
              <Room id="1201" location="left" />
            </Path>
          </Path>
        </Path>
      </Path>
    </Path>
  </Floor>    

  


  <Floor num="4">
    <Stairs id="stairs5" name="Лестница" />
    <Path start="stairs5" type="left_walls" dir="up"> 
      <Point id="near_stairs5.4" />
      <Room location="left" id="1457" />
      <Path start="near_stairs5.4" rotate="right" type="left_right_walls">                                                           
        <Room location="right" id="1448" />
        <Room location="left" id="1453" />
        <Room location="right" id="1446" />
        <Room location="left" id="1451" />
        <Room location="right" id="1444" />
        <Room location="left" id="1449" />
        <Room location="right" id="1442" />
        <Room location="left" id="1447" />
        <Room location="right" id="1440" />
        <Room location="left" id="1445" />
        <Room location="left" id="1443" />
        <Room location="right" id="1438" />
        <Room location="right" id="1436" />
        <Room location="left" id="1441" />
        <Room location="right" id="1434" />
        <Room location="right" id="1432" />
        <Room location="left" id="1439" />
        <Room location="right" id="1430" />
        <Room location="left" id="1437" />
        <Room location="left" id="1435" />
        <Room location="right" id="1426" />
        <Point id="near_big_stairs_4" />
        <Path rotate="left" start="near_big_stairs_4" type="left_right_walls">
          <Room location="left" id="1424" />
          <Room location="right" id="1433" />
          <Room location="left" id="1431" />
        </Path>
        <Path rotate="forward" start="near_big_stairs_4" type="left_walls">
          <Stairs id="big_stairs" />
          <Path rotate="right" start="big_stairs" type="left_right_walls">
            <Point id="corridor_4_near_stairs" />
            <Path rotate="left" start="corridor_4_near_stairs" type="left_right_walls">
              <Room id="1416" location="right" />
              <Room id="1414" location="right" />
              <Room id="1429" location="left" />
              <Room id="1427" location="left" />
              <Room id="1425" location="left" />
              <Room id="1423" location="left" />
              <Room id="1421" location="left" />
              <Room id="1412" location="right" />
              <Room id="1419" location="left" />
              <Room id="1410" location="right" />
              <Room id="1417" location="left" />
              <Room id="1415" location="left" />
              <Room id="1408" location="right" />
              <Room id="1411" location="left" />
              <Room id="1406" location="right" />
              <Room id="1405" location="left" />
              <Room id="1404" location="right" />
              <Room id="1403" location="left" />
              <Room id="1402" location="right" />
              <Room id="1401" location="left" />
            </Path>
          </Path>
        </Path>
      </Path>
    </Path>
  </Floor>   

  <Floor num="5">
    <Stairs id="stairs5" name="Лестница" />
    <Path start="stairs5" type="left_walls" dir="up"> 
      <Point id="near_stairs5.5" />
      <Room location="left" id="1533" />
      <Room location="left" id="1531" />  
      <Path start="near_stairs5.5" rotate="right" type="left_right_walls">                                                           
        <Room location="right" id="1536" />
        <Room location="left" id="1529" />
        <Room location="right" id="1534" />
        <Room location="right" id="1532" />
        <Room location="left" id="1527" />
        <Room location="right" id="1530" />
        <Room location="left" id="1525" />
        <Room location="right" id="1528" />
        <Room location="left" id="1523" />
        <Room location="right" id="1526" />
        <Room location="right" id="1524" />
        <Room location="left" id="1521" />
        <Room location="right" id="1522" />
        <Room location="left" id="1519" />
        <Point id="near_big_stairs_5" />
        <Path rotate="left" start="near_big_stairs_5" type="left_right_walls">
          <Room location="left" id="1517" />
          <Room location="right" id="1518" />
          <Room location="left" id="1515" />
        </Path>
        <Path rotate="forward" start="near_big_stairs_5" type="left_walls">
          <Stairs id="big_stairs" />
          <Path rotate="right" start="big_stairs" type="left_right_walls">
            <Point id="corridor_5_near_stairs" />
            <Path rotate="left" start="corridor_5_near_stairs" type="left_right_walls">
              <Room id="1516" location="right" />
              <Room id="1514" location="right" />
              <Room id="1513" location="left" />
              <Room id="1511" location="left" />
              <Room id="1509" location="left" />
              <Room id="1512" location="right" />
              <Room id="1507" location="left" />
              <Room id="1510" location="right" />
              <Room id="1508" location="right" />
              <Room id="1505" location="left" />
              <Room id="1506" location="right" />
              <Room id="1503" location="left" />
              <Room id="1504" location="right" />
              <Point id="near_small_stairs" />
              <Path rotate="right" start="near_small_stairs" type="left_right_walls">
                <Room location="right" id="1501" />
              </Path>
              <Path rotate="forward" start="near_small_stairs" type="left_walls">
                <Stairs id="small_stairs" name="Лестница" />
                <Path rotate="right" start="small_stairs" type="left_right_walls">
                  <Point id="corridor_6.1_near_stairs" />
                  <Path rotate="left" start="corridor_6.1_near_stairs" type="left_right_walls">

                    <Room location="left" id="1625" />
                    <Room location="left" id="1627" />
                    <Room location="right" id="1626" />
                    <Room location="left" id="1629" />

                    <Room location="right" id="1628" />
                    <Room location="left" id="1631" />
                    <Room location="right" id="1630" />
                    <Room location="left" id="1633" />

                    <Room location="right" id="1632" />
                    <Room location="left" id="1635" />
                    <Room location="right" id="1634" />
                    <Room location="left" id="1637" />

                    <Room location="right" id="1636" />
                    <Room location="left" id="1639" />
                    <Room location="right" id="1638" />
                    <Room location="left" id="1641" />

                    <Room location="right" id="1640" />
                    <Room location="left" id="1643" />
                    <Room location="right" id="1642" />
                    <Room location="left" id="1645" />

                    <Room location="right" id="1644" />
                    <Room location="left" id="1647" />
                    <Room location="right" id="1646, 1648" />
                    <Room location="left" id="1649" />

                    <Room location="right" id="1650" />
                    <Room location="left" id="1651" />
                    <Room location="right" id="1652" />
                    <Room location="left" id="1653" />


                  </Path>
                </Path>
              </Path>
            </Path>
          </Path>
        </Path>
      </Path>
    </Path>
  </Floor>

  <Floor num="6">
    <Stairs id="stairs5" name="Лестница" />
    <Path start="stairs5" type="left_walls" dir="up"> 
      <Point id="near_stairs5.6" />
      <Room location="left" id="1623" />
      <Room location="right" id="1624" />  
      <Path start="near_stairs5.6" rotate="forward" type="left_right_walls">                                                           
        <Room location="right" id="1622" />
        <Room location="left" id="1621" />
        <Room location="right" id="1620" />
        <Room location="left" id="1619" />
        <Room location="left" id="1617" />
        <Room location="right" id="1618" />
        <Room location="left" id="1615" />
        <Room location="right" id="1616" />
        <Room location="left" id="1613" />
        <Room location="left" id="1611" />
        <Room location="right" id="1614" />
        <Room location="left" id="1609" />
        <Room location="right" id="1612" />
        <Room location="left" id="1607" />
        <Room location="right" id="1610" />
        <Room location="right" id="1608" />
        <Room location="left" id="1603" />
        <Room location="right" id="1606" />
        <Room location="right" id="1604" />
        <Point id="near_big_stairs_6" />
        <Path rotate="left" start="near_big_stairs_6" type="left_right_walls">
          <Room location="right" id="1602" />
          <Room location="left" id="1601" />
        </Path>
      </Path>
    </Path>
  </Floor>


  <Floor num="4.5">
    <Stairs id="stairs10" name="Лестница"/>
    <Path start="stairs10" type="left_walls" dir="up"> 
      <Point id="near_stairs10_4" />
      <Stairs id="stairs10" name="Лестница" />
      <Path start="near_stairs10" rotate="left" type="left_right_walls">  
        <Room location="right" id="5406" />
        <Room location="right" id="5408" />
        <Room location="right" id="5412" />
        <Room location="left" id="5411" />
        <Room location="left" id="5413" />
        <Room location="left" id="4400" />
        <Room location="left" id="5405" />
        <Room location="left" id="5409" />
        <Room location="left" id="5403" />
        <Room location="left" id="5401" />
      </Path>
    </Path>
  </Floor>    

  <Floor num="5.5">
    <Stairs id="stairs10" name="Лестница" />
    <Path start="stairs10" type="left_walls" dir="up"> 
      <Point id="near_stairs10_5" />
      <Stairs id="stairs10" name="Лестница" />
      <Path start="near_stairs10" rotate="left" type="left_right_walls"> 
        <Room location="right" id="5506" />
        <Room location="left" id="5511" />
        <Room location="right" id="5504" />
        <Room location="left" id="5507" />
        <Room location="right" id="5502" />
        <Room location="left" id="5505" />
        <Room location="left" id="5503" />
        <Room location="left" id="5501" />
        <Path start="5511" rotate="forward" type="left_right_walls">
          <Room location="left" id="5510" />
          <Room location="left" id="5512" />
          <Room location="right" id="5513" />
          <Room location="right" id="5515" />
          <Room location="left" id="5516" />
          <Room location="right" id="5517" />
          <Room location="up" id="5518" />
        </Path>
      </Path>
    </Path>
  </Floor>

  <Floor num="6.5">
    <Stairs id="stairs10" name="Лестница" />
    <Path start="stairs10" type="left_walls" dir="up"> 
      <Point id="near_stairs10_6" />
      <Stairs id="stairs10" name="Лестница" />
      <Path start="near_stairs10" rotate="left" type="left_right_walls"> 
        <Room location="left" id="5613" />
        <Room location="right" id="5608" />
        <Room location="left" id="5611" />
        <Room location="right" id="5606" />
        <Room location="left" id="5609" />
        <Room location="right" id="5604" />
        <Room location="left" id="5607" />
        <Room location="right" id="5601" />
        <Room location="left" id="5605" />
        <Room location="right" id="5602" />
        <Room location="left" id="5603" />
        <Path start="5511" rotate="right" type="left_right_walls">
          <Room location="left" id="5612" />
          <Room location="right" id="5624" name="Toilet" />
          <Room location="left" id="5614" />
          <Room location="right" id="5622" />
          <Room location="left" id="5616" />
          <Room location="right" id="5620" />
          <Room location="up" id="5618" />
        </Path>
        <Path start="5613" rotate="forward" type="left_right_walls">
          <Room location="left" id="5628" />
          <Room location="right" id="5615" />
          <Room location="left" id="5630" />
          <Room location="right" id="5617" />
          <Room location="left" id="5632" />
          <Room location="right" id="5619" />
          <Room location="left" id="5634" />
          <Room location="right" id="5621" />
          <Room location="right" id="5623" />
          <Room location="up" id="5625" />
        </Path>
      </Path>
    </Path>
  </Floor>


  <Floor num="7.5">
    <Stairs id="stairs10" name="Лестница" />
    <Path start="stairs10" type="left_walls" dir="up"> 
    <Point id="near_stairs10_7" />
    <Stairs id="stairs10" name="Лестница" />
    <Path start="near_stairs10" rotate="forward" type="left_right_walls"> 
      <Room location="right" id="5708" />
      <Room location="left" id="5709" />
      <Room location="right" id="5706" />
      <Room location="left" id="5707" />
      <Room location="right" id="5704" />
      <Room location="left" id="5705" />
      <Room location="left" id="5703" />
      <Room location="right" id="5702" />
      <Path start="5708" rotate="right" type="left_right_walls">
        <Room location="left" id="5710" />
        <Room location="left" id="5712" />
        <Room location="right" id="5713" />
        <Room location="left" id="5714" />
        <Room location="right" id="5719" />
        <Room location="left" id="5716" />
        <Room location="right" id="5721" />
        <Room location="up" id="5718" />
      </Path>
      <Path start="5709" rotate="left" type="left_right_walls">
        <Room location="right" id="5711" />
        <Room location="up" id="5713" />
      </Path>
    </Path>
 </Floor>

</Plan>
`
