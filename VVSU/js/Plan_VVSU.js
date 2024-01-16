let planXML = `
<Plan object="VVSU">
  <Exit id="2" name="Вход 2" floor="3" show_name="1" />
 
  <Floor num="3">
    <Path start="2" walls="left_right" dir="right">
      <Joint to="поворота на Андеграунд" />
      <Path rotate="left" walls="no">
        <Room name="Андеграунд" to="Андеграунда" fav="1" id="анд" />
      </Path>
      <Path rotate="forward" walls="left_right">
        <Room name="Кофейня" wall="left" fav="1" id="коф" />
        <Door />
        <Joint name="Турникет" to="турникета" />
        <Path rotate="left" walls="left">
          <Joint to="угла" />
          <Path rotate="right" walls="left">
            <Room name="Лестница" to="лестницы" wall="left" />
            <Room name="Буфет" to="буфета" wall="left" fav="1" id="буф" />
            <Room name="Голубиная падь" to="Голубиной пади" wall="left" />
            <Joint to="развилки" />
            <Path rotate="left" walls="left_right">
              <Joint to="поворота направо" />
              <Path rotate="right">                
                <Joint to="развилки" />
                <Path rotate="right">
                  <Point id="corner2" />
                </Path>
                <Path rotate="forward">
                  <Room wall="left" id="1306" name="Мужской туалет" to="мужского туалета" />
                  <Room wall="left" id="1308" name="Женский туалет" to="женского туалета" />
                  <Joint to="перехода в 4 корпус" />
                  <Path rotate="forward">
                    <Room wall="right" name="Блинная" fav="1" id="блин" />
                    <Door name="Кафедра маркетинга и торговли" to="кафедры маркетинга и торговли" />
                    <Path rotate="forward" walls="left_right">
                      <Room id="4301" wall="right" />
                      <Room id="4303" wall="right" />
                      <Room id="4305" wall="right" />
                      <Room id="4302" wall="right" />
                      <Room id="4307" wall="right" />
                      <Room id="4309" wall="right" />
                      <Room id="4304" wall="right" />
                      <Room id="4306" wall="right" />
                      <Joint to="развилки" />
                      <Path rotate="forward">
                        <Room id="4311" wall="right" />
                        <Room id="4313" wall="right" />
                        <Room id="4315" wall="right" />
                      </Path>
                      <Path rotate="left">
                        <Joint to="развилки" />
                        <Path rotate="right">
                          <Stairs id="stairs2" />
                        </Path>
                        <Path rotate="left" walls="left_right">
                          <Room wall="left" id="4302" />
                        </Path>
                      </Path>
                    </Path>
                  </Path>
                </Path>
              </Path>
              <Path rotate="forward">
                <Room name="Столовая" to="столовой" wall="left" fav="1" id="стол" />  
                <Joint to="угла" />
                <Path rotate="right" walls="left_right">
                  <Room name="Студотряды" to="студотрядов" wall="right" />
                  <Stairs id="stairs1" wall="left" />
                </Path>
              </Path>
            </Path>
            <Path rotate="right" wall="left">
            
                <Room wall="right" id="1311" />
                <Room wall="right" id="1313" />
              <Path start="1313" rotate="left" type="left_right_walls">
                <Room wall="left" id="1309" />
                <Room wall="right" id="1312" />
                <Room wall="left" id="1307" />
                <Room wall="right" id="1310" />
          
              </Path>
              <Path rotate="forward" walls="left">
                <Room wall="right" id="1315" />
                <Room wall="right" id="1317" />
                <Room wall="left" id="1314" />
                <Room wall="left" id="1316" />
                <Room wall="right" id="1319" />
                <Room wall="left" id="1318" />
                <Room wall="left" id="1320" />
                <Room wall="left" id="1322" />
                <Room wall="left" id="1324" />
                <Room wall="right" id="1321" />
                <Room wall="left" id="1326" />
                <Room wall="right" id="1323" />
                <Room wall="left" id="1328" />
                <Room wall="right" id="1325" />
                <Room wall="left" id="1330" />
                <Room wall="right" id="1327" />
                <Room wall="left" id="1332" />
                <Room wall="right" id="1331" />
                <Room wall="right" id="1329" />
                <Room wall="left" id="1334" />
                <Path rotate="forward" walls="right">
                  <Stairs id="big_stairs" name="Большая лестница" />
                  <Path rotate="right" start="big_stairs" walls="left_right">
                    <Point id="near_big_stairs_3" />
                    <Path rotate="left" start="near_big_stairs_2" walls="left_right">
                      <Room wall="left" id="1336" />
                      <Room wall="right" id="1333" />
                      <Room wall="right" id="1335" />
                      <Room wall="left" id="1338" />
                    </Path>
                    <Joint to="угла" />  
                    <Room wall="right" id="1337" />
                    <Room wall="left" id="1340" />
                    <Room wall="right" id="1339" />
                    <Room wall="left" id="1342" />
                    <Room wall="left" id="1344" />
                    <Room wall="left" id="1346" />
                    <Room wall="right" id="1341" />
                    <Joint to="Зоны отдыха" />
                    <Room wall="left" id="1348" />
                    <Room wall="right" id="1343" />
                    <Room wall="left" id="1350" />
                    <Room wall="right" id="1345" />
                    <Room wall="left" id="1352" />
                    <Joint to="Кассы" />
                    <Room wall="left" id="1354" />
                    <Room wall="right" id="1349" />
                    <Room wall="left" id="1356" />
                    <Room wall="right" id="1351" />
                    <Room wall="right" id="1353" />
                    <Room wall="left" id="1358" />
                    <Stairs id="stairs5" name="Лестница" />
                  </Path>
                </Path>
              </Path>     
            </Path>
          </Path>
        </Path>
      </Path>
    </Path>
  </Floor>
 

  <Exit id="1" name="Вход 1" floor="1" show_name="1" />
  <Floor num="1">
    <Stairs id="stairs5" name="Лестница" />
    <Path start="1" walls="right" dir="up">
      <Joint name="Турникет" to="турникета" />
      <Path rotate="forward" walls="right">
        <Room wall="right" name="Лотос" to="Лотоса" fav="1" id="лотос" />
      
          <Path rotate="left" walls="right">
          <Room wall="right" name="Гардероб" to="гардероба" fav="1" id="гард" />
          <Room wall="right" id="1140" />
          <Room wall="left" id="1131" />
          <Room wall="left" id="1129" />
          <Room wall="left" id="1127" />
          <Room wall="left" id="1125" />
          <Room wall="right" id="1132" />
          <Room wall="right" id="1130" />
          <Room wall="left" id="1123" />
          <Room wall="right" id="1128" />
          <Room wall="right" id="1126" />
          <Joint to="угла" />
          <Path rotate="left" walls="left_right">
            <Room wall="left" id="1119" />
            <Room wall="right" id="1117" />
          </Path>
          <Path rotate="forward" walls="left">
            <Stairs id="big_stairs" />
            <Path rotate="right" start="big_stairs" walls="left_right">
              <Point id="corridor_1_near_stairs" />
              <Path rotate="left" start="corridor_1_near_stairs" walls="left_right">
                <Room id="1115" wall="left" />
                <Room id="1113" wall="left" />
                <Room id="1111" wall="left" />
                <Room id="1114" wall="right" />
                <Room id="1109" wall="left" />
                <Room id="1107" wall="left" />
                <Room id="1112" wall="right" />
                <Room id="1105" wall="left" />
                <Room id="1102" wall="right" />
              </Path>
            </Path>
          </Path>
        </Path>
      </Path>
    </Path>
  </Floor>

  <Floor num="2">
    <Stairs id="stairs5" name="Лестница" />
    <Path start="stairs5" walls="left_right" dir="up"> 
      <Point id="near_stairs5.2" />
      <Room wall="left" name="Библиотека" to="библиотеки" />

      <Path start="stairs5" rotate="right" walls="left_right" dir="up">
        <Room wall="right" id="1236" />
        <Room wall="left" id="1233" />
        <Room wall="right" id="1234" />
        <Room wall="left" id="1231" />
        <Room wall="right" id="1232" />
        <Room wall="left" id="1229" />
        <Room wall="right" id="1230" />
        <Room wall="right" id="1228" />
        <Room wall="left" id="1227" />
        <Room wall="right" id="1226" />
        <Room wall="right" id="1224" />
        <Room wall="left" id="1225" />
        <Room wall="right" id="1222" />
        <Room wall="left" id="1223" />
        <Joint to="угла" /> 
        <Point id="near_big_stairs_2" />
        <Path rotate="left" start="near_big_stairs_2" walls="left_right">
          <Room wall="left" id="1221" />
          <Room wall="right" id="1218" />
          <Room wall="left" id="1219" />
        </Path>
        <Path rotate="forward" start="near_big_stairs_2" walls="left">
          <Stairs id="big_stairs" />
          <Path rotate="right" start="big_stairs" walls="left_right">
            <Point id="corridor_2_near_stairs" />
            <Path rotate="left" walls="left_right">
              <Room id="1216" wall="right" />
              <Room id="1214" wall="right" />
              <Room id="1215" wall="left" />
              <Room id="1212" wall="right" />
              <Room id="1210" wall="right" />
              <Room id="1213" wall="left" />
              <Room id="1208" wall="right" />
              <Room id="1211" wall="left" />
              <Room id="1206" wall="right" />
              <Room id="1209" wall="left" />
              <Room id="1204" wall="right" />
              <Room id="1207" wall="left" />
              <Room id="1205" wall="left" />
              <Room id="1203" wall="left" />
              <Room id="1202" wall="right" />
              <Room id="1201" wall="left" />
            </Path>
          </Path>
        </Path>
      </Path>
    </Path>
  </Floor>    

  


  <Floor num="4">
    <Stairs id="stairs5" name="Лестница" />
    <Path start="stairs5" walls="left" dir="up"> 
      <Point id="near_stairs5.4" />
      <Room wall="left" name="1457" to="1457" />
      
        <Path start="near_stairs5.4" rotate="right" walls="left_right" dir="up">
        <Room wall="right" id="1448" />
        <Room wall="left" id="1453" />
        <Room wall="right" id="1446" />
        <Room wall="left" id="1451" />
        <Room wall="right" id="1444" />
        <Room wall="left" id="1449" />
        <Room wall="right" id="1442" />
        <Room wall="left" id="1447" />
        <Room wall="right" id="1440" />
        <Room wall="left" id="1445" />
        <Room wall="left" id="1443" />
        <Room wall="right" id="1438" />
        <Room wall="right" id="1436" />
        <Room wall="left" id="1441" />
        <Room wall="right" id="1434" />
        <Room wall="right" id="1432" />
        <Room wall="left" id="1439" />
        <Room wall="right" id="1430" />
        <Room wall="left" id="1437" />
        <Room wall="left" id="1435" />
        <Room wall="right" id="1426" />
        <Joint to="угла" />
        <Path rotate="left" walls="left_right">
          <Room wall="left" id="1424" />
          <Room wall="right" id="1433" />
          <Room wall="left" id="1431" />
        </Path> 
        <Path rotate="forward" walls="left">
          <Stairs id="big_stairs" to="лестницы" />
          <Path rotate="right" start="big_stairs" walls="left_right">
            <Point id="corridor_4_near_stairs" />
            <Path rotate="left" start="corridor_4_near_stairs" walls="left_right">
              <Room id="1416" wall="right" />
              <Room id="1414" wall="right" />
              <Room id="1429" wall="left" />
              <Room id="1427" wall="left" />
              <Room id="1425" wall="left" />
              <Room id="1423" wall="left" />
              <Room id="1421" wall="left" />
              <Room id="1412" wall="right" />
              <Room id="1419" wall="left" />
              <Room id="1410" wall="right" />
              <Room id="1417" wall="left" />
              <Room id="1415" wall="left" />
              <Room id="1408" wall="right" />
              <Room id="1411" wall="left" />
              <Room id="1406" wall="right" />
              <Room id="1405" wall="left" />
              <Room id="1404" wall="right" />
              <Room id="1403" wall="left" />
              <Room id="1402" wall="right" />
              <Room id="1401" wall="left" />
            </Path>
          </Path>
        </Path>
      </Path>
    </Path>
    <Stairs id="stairs2" name="Лестница" />
    <Path dir="up" walls="left_right" start="stairs2">
      <Path rotate="right" walls="left_right">
        <Point id="corridor_4.2_near_stairs" />
        <Path rotate="left" start="corridor_4.2_near_stairs" walls="left_right">
          <Room wall="left" id="4401" />
          <Room wall="left" id="4403" />
          <Room wall="left" id="4405" />
          <Room wall="right" id="4402" />
          <Room wall="left" id="4407" />
          <Room wall="left" id="4409" /> 
          <Room wall="left" id="4411" />
          <Room wall="left" id="4413" />
          <Room wall="right" id="4404" />
          <Room wall="right" id="4406" />
        </Path>
      </Path>
    </Path>

  </Floor> 

  <Floor num="5">
    <Stairs id="stairs5" name="Лестница" />
    <Path start="stairs5" walls="left" dir="up"> 
      <Point id="near_stairs5.5" />
      <Room wall="left" name="1533" to="1533" />
      <Room wall="left" name="1631" to="1531" />
   
      <Path start="near_stairs5.5" rotate="right" walls="left_right" dir="up">
        <Room wall="right" id="1536" />
        <Room wall="left" id="1529" />
        <Room wall="right" id="1534" />
        <Room wall="right" id="1532" />
        <Room wall="left" id="1527" />
        <Room wall="right" id="1530" />
        <Room wall="left" id="1525" />
        <Room wall="right" id="1528" />
        <Room wall="left" id="1523" />
        <Room wall="right" id="1526" />
        <Room wall="right" id="1524" />
        <Room wall="left" id="1521" />
        <Room wall="right" id="1522" />
        <Room wall="left" id="1519" />
        <Joint to="угла" />
        <Point id="near_big_stairs_5" />
        <Path rotate="left" start="near_big_stairs_5" walls="left_right">
          <Room wall="left" id="1517" />
          <Room wall="right" id="1518" />
          <Room wall="left" id="1515" />
        </Path>
        <Path rotate="forward" start="near_big_stairs_5" walls="left">
          <Stairs id="big_stairs" to="лестницы" />
          <Path rotate="right" start="big_stairs" walls="left_right">
            <Path rotate="left" walls="left_right">
              <Room id="1516" wall="right" />
              <Room id="1514" wall="right" />
              <Room id="1513" wall="left" />
              <Room id="1511" wall="left" />
              <Room id="1509" wall="left" />
              <Room id="1512" wall="right" />
              <Room id="1507" wall="left" />
              <Room id="1510" wall="right" />
              <Room id="1508" wall="right" />
              <Room id="1505" wall="left" />
              <Room id="1506" wall="right" />
              <Room id="1503" wall="left" />
              <Room id="1504" wall="right" />
              <Joint to="угла" />
              <Path rotate="right" walls="left_right">
                <Room wall="left" name="1501" to="1501" />
              </Path> 
              <Path rotate="forward" start="near_small_stairs" walls="left">
                <Stairs id="small_stairs" name="Лестница" to="лестницы" />
                <Path rotate="right" start="small_stairs" walls="left_right">
                  <Path rotate="left" walls="left_right">
                    <Room wall="left" id="1625" />
                    <Room wall="left" id="1627" />
                    <Room wall="right" id="1626" />
                    <Room wall="left" id="1629" />

                    <Room wall="right" id="1628" />
                    <Room wall="left" id="1631" />
                    <Room wall="right" id="1630" />
                    <Room wall="left" id="1633" />

                    <Room wall="right" id="1632" />
                    <Room wall="left" id="1635" />
                    <Room wall="right" id="1634" />
                    <Room wall="left" id="1637" />

                    <Room wall="right" id="1636" />
                    <Room wall="left" id="1639" />
                    <Room wall="right" id="1638" />
                    <Room wall="left" id="1641" />

                    <Room wall="right" id="1640" />
                    <Room wall="left" id="1643" />
                    <Room wall="right" id="1642" />
                    <Room wall="left" id="1645" />

                    <Room wall="right" id="1644" />
                    <Room wall="left" id="1647" />
                    <Room wall="right" id="1646, 1648" />
                    <Room wall="left" id="1649" />

                    <Room wall="right" id="1650" />
                    <Room wall="left" id="1651" />
                    <Room wall="right" id="1652" />
                    <Room wall="left" id="1653" />
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
  <Path start="stairs5" walls="left" dir="up"> 
    <Point id="near_stairs5.6" />
    <Room wall="left" name="1623" to="1623" />
    <Room wall="left" name="1624" to="1624" />
  
    <Path start="near_stairs5.6" rotate="forward" walls="left_right" dir="up">
      <Room wall="right" id="1622" />
      <Room wall="left" id="1621" />
      <Room wall="right" id="1620" />
      <Room wall="left" id="1619" />
      <Room wall="left" id="1617" />
      <Room wall="right" id="1618" />
      <Room wall="left" id="1615" />
      <Room wall="right" id="1616" />
      <Room wall="left" id="1613" />
      <Room wall="left" id="1611" />
      <Room wall="right" id="1614" />
      <Room wall="left" id="1609" />
      <Room wall="right" id="1612" />
      <Room wall="left" id="1607" />
      <Room wall="right" id="1610" />
      <Room wall="right" id="1608" />
      <Room wall="left" id="1603" />
      <Room wall="right" id="1606" />
      <Room wall="right" id="1604" />
      <Joint to="угла" />
      <Point id="near_big_stairs_6" />
      <Path rotate="left" start="near_big_stairs_6" walls="left_right">
        <Room wall="right" id="1602" />
        <Room wall="left" id="1601" />
      </Path>
    </Path>
  </Path>
</Floor>


<Floor num="4.5">
   <Stairs id="stairs10" name="Лестница"/>
    <Path start="stairs10" walls="left" dir="up"> 
      <Point id="near_stairs10" />
      <Stairs id="stairs10" name="Лестница" />
      <Path start="near_stairs10" rotate="left" walls="left_right"> 
        <Room wall="right" id="5406" />
        <Room wall="right" id="5408" />
        <Room wall="right" id="5412" />
        <Room wall="left" id="5411" />
        <Room wall="left" id="5413" />
        <Room wall="left" id="4400" />
        <Room wall="left" id="5405" />
        <Room wall="left" id="5409" />
        <Room wall="left" id="5403" />
        <Room wall="left" id="5401" />
      </Path>
    </Path>
</Floor>    

  <Floor num="5.5">
    <Stairs id="stairs10" name="Лестница" />
    <Path start="stairs10" walls="left" dir="up"> 
      <Point id="near_stairs10" />
      <Stairs id="stairs10" name="Лестница" />
      <Path start="near_stairs10" rotate="left" walls="left_right"> 
      <Room wall="right" id="5506" />
      <Room wall="left" id="5511" />
      <Room wall="right" id="5504" />
      <Room wall="left" id="5507" />
      <Room wall="right" id="5502" />
      <Room wall="left" id="5505" />
      <Room wall="left" id="5503" />
      <Room wall="left" id="5501" />
      <Path start="5511" rotate="forward" walls="left_right">
        <Room wall="left" id="5510" />
        <Room wall="left" id="5512" />
        <Room wall="right" id="5513" />
        <Room wall="right" id="5515" />
        <Room wall="left" id="5516" />
        <Room wall="right" id="5517" />
        <Room wall="up" id="5518" />
       </Path>
    </Path>
  </Path>
  </Floor>

  <Floor num="6.5">
    <Stairs id="stairs10" name="Лестница" />
    <Path start="stairs10" walls="left" dir="up"> 
      <Point id="near_stairs10" />
      <Stairs id="stairs10" name="Лестница" />
      <Path start="near_stairs10" rotate="left" walls="left_right"> 
      <Room wall="left" id="5613" />
      <Room wall="right" id="5608" />
      <Room wall="left" id="5611" />
      <Room wall="right" id="5606" />
      <Room wall="left" id="5609" />
      <Room wall="right" id="5604" />
      <Room wall="left" id="5607" />
      <Room wall="right" id="5601" />
      <Room wall="left" id="5605" />
      <Room wall="right" id="5602" />
      <Room wall="left" id="5603" />
      <Path start="5511" rotate="right" walls="left_right">
        <Room wall="left" id="5612" />
        <Room wall="right" id="5624" name="Toilet" />
        <Room wall="left" id="5614" />
        <Room wall="right" id="5622" />
        <Room wall="left" id="5616" />
        <Room wall="right" id="5620" />
        <Room wall="up" id="5618" />
      </Path>
      <Path start="5613" rotate="forward" walls="left_right">
        <Room wall="left" id="5628" />
        <Room wall="right" id="5615" />
        <Room wall="left" id="5630" />
        <Room wall="right" id="5617" />
        <Room wall="left" id="5632" />
        <Room wall="right" id="5619" />
        <Room wall="left" id="5634" />
        <Room wall="right" id="5621" />
        <Room wall="right" id="5623" />
        <Room wall="up" id="5625" />
      </Path>
      </Path>
    </Path>
  </Floor>


  <Floor num="7.5">
    <Stairs id="stairs10" name="Лестница" />
    <Path start="stairs10" walls="left" dir="up"> 
      <Point id="near_stairs10" />
      <Stairs id="stairs10" name="Лестница" />
        <Path start="near_stairs10" rotate="forward" walls="left_right">
          <Room wall="right" id="5708" />
          <Room wall="left" id="5709" />
          <Room wall="right" id="5706" />
          <Room wall="left" id="5707" />
          <Room wall="right" id="5704" />
          <Room wall="left" id="5705" />
          <Room wall="left" id="5703" />
          <Room wall="right" id="5702" />
          <Path start="5708" rotate="right" walls="left_right">
            <Room wall="left" id="5710" />
            <Room wall="left" id="5712" />
            <Room wall="right" id="5713" />
            <Room wall="left" id="5714" />
            <Room wall="right" id="5719" />
            <Room wall="left" id="5716" />
            <Room wall="right" id="5721" />
            <Room wall="up" id="5718" />
          </Path>
          <Path start="5709" rotate="left" walls="left_right">
            <Room wall="right" id="5711" />
            <Room wall="up" id="5713" />
          </Path>
        </Path>
    </Path>
 </Floor>

</Plan>
`
