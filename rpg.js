  function startGame() {
    document.getElementById("story").innerHTML = "一觉醒来，你发现自己穿越到了中世纪的无名小村庄且身无分文。你的第一想法是?";
    document.querySelector(".button-container").innerHTML = `
      <button onclick="makeChoice(1)">好倒霉，为什么偏偏是我?!</button>
      <button onclick="makeChoice(2)">穿越了，我一定是天选之人!</button>
      <button onclick="makeChoice(3)">不如先去找点吃的吧。</button>
    `;
  }

  function makeChoice(choice) {
    switch (choice) {
      case 1:
        document.getElementById("story").innerHTML = "你对中世纪的了解程度将决定你能否在这里活下来，那么在你眼里，中世纪是怎样的?";
        document.querySelector(".button-container").innerHTML = `
          <button onclick="makeChoice(4)">中世纪的人们可能很邪恶。</button>
          <button onclick="makeChoice(5)">中世纪的人们可能很善良。</button>
          <button onclick="makeChoice(6)">狗狗就是最可爱的!</button>
        `;
        break;

      case 2:
      case 4:
        document.getElementById("story").innerHTML = "神秘的不速之客在日暮时分来到你所在的小村王他拿着一份手抄本，四下张望着寻人。直觉告诉你他找的人就是你，那么他找你的原因是?";
        document.querySelector(".button-container").innerHTML = `
          <button onclick="makeChoice(7)">他必然有求于我。</button>
          <button onclick="makeChoice(8)">我是贵族流落在外的血脉!</button>
          <button onclick="makeChoice(9)">坏了，我可能是个逃犯。</button>
        `;
        break;

      case 3:
      case 5:
      case 7:
        document.getElementById("story").innerHTML = "神秘的不速之客告诉你，你是被选中的屠龙勇士。不久之前恶龙突然出现，带来灾难带走了公主并消失不见。对此，你的选择是?";
        document.querySelector(".button-container").innerHTML = `
          <button onclick="makeChoice(10)">手拿主角剧本的我义不容辞!</button>
          <button onclick="makeChoice(11)">谁想救公主啊，我的梦想是环游世界!</button>
          <button onclick="makeChoice(12)">我比较关心报酬会给多少。</button>
        `;
        break;

      case 8:
      case 10:
        document.getElementById("story").innerHTML = "如果你真的是天选之人，那么是什么决定了你的身份?";
        document.querySelector(".button-container").innerHTML = `
          <button onclick="makeChoice(13)">我出生那天，天上下蛇雨了。</button>
          <button onclick="makeChoice(14)">女基督徒们说我是天选之人。</button>
          <button onclick="makeChoice(15)">我的掌纹是一个等边三角形。</button>
        `;
        break;

        case 6:
        case 9:
        case 11:
        case 13:
          document.getElementById("story").innerHTML = "雄心壮志的你决定离开小村庄，在你的面前有三条路，请务必谨慎决策:";
          document.querySelector(".button-container").innerHTML = `
            <button onclick="makeChoice(16)">乘船出海，我是要成为海贼王的人。</button>
            <button onclick="makeChoice(17)">寻找魔法森林，这里的树是由金子、银子和紫铜组成的，一夜暴富不是梦!</button>
            <button onclick="makeChoice(18)">讨伐恶龙，不论是为了扬名立万还是拯救公主C.我希望自己能成为英雄。</button>
          `;
          break;

          case 16:
            document.getElementById("story").innerHTML = "冒险需要劳逸结合，你必须好好休息。你觉得以下地点哪里最安全?";
            document.querySelector(".button-container").innerHTML = `
              <button onclick="makeChoice(19)">柱子上挂有花环的旅店。</button>
              <button onclick="makeChoice(20)">村民的家里。</button>
              <button onclick="makeChoice(21)">森林中露天席地。</button>
            `;
            break;

            case 12:
            case 14:
            case 17:
            case 19:
            case 26:
              document.getElementById("story").innerHTML = "你缺钱了，主角也是要吃饭的。那么，你会通过以下哪种途径挣钱?";
              document.querySelector(".button-container").innerHTML = `
                <button onclick="makeChoice(22)">应聘酒馆招待。稳定而长久的收入来源。</button>
                <button onclick="makeChoice(23)">倒卖独角兽的角。你知道独角兽就是犀牛、独角鲸或者长颈鹿。</button>
                <button onclick="makeChoice(24)">盗墓寻宝！木乃伊身上的碎屑够你大赚一笔。</button>
              `;
              break;

              case 15:
              case 18:
              case 20:
                document.getElementById("story").innerHTML = "你遇见了传说中的恶龙，公主的确就在它的巢穴之中，那么你认为故事的真相是?";
                document.querySelector(".button-container").innerHTML = `
                  <button onclick="makeChoice(25)">这是如假包换的恶龙，你此行的讨伐目标。</button>
                  <button onclick="makeChoice(26)">公主的愿望召唤了飞龙，她期待逃离皇室的近亲婚姻。</button>
                  <button onclick="makeChoice(27)">这头龙是王子变的，唯有公主的爱能帮他恢复人形。</button>
                `;
                break;

                case 23:
                case 24:
                case 25:
                  document.getElementById("story").innerHTML = "冒险中你遇到了形形色色的人，其中让你印象最为深刻的是?";
                  document.querySelector(".button-container").innerHTML = `
                    <button onclick="makeChoice(28)">与你签订契约的神灯精灵。</button>
                    <button onclick="makeChoice(29)">和你作对的天气巫师。</button>
                    <button onclick="makeChoice(30)">帮助过你的温柔修女。</button>
                  `;
                  break;


      case 28:
        document.getElementById("story").innerHTML = "【你是欧气拉满100%的屠龙英雄】天将降大任于斯人也！尽管前路艰辛，但是充满正义感的你会在使命的召唤下踏上冒险之路，结识智慧伙伴一路披荆斩棘，势如破竹地直捣恶龙巢穴。这时，你发现公主并不需要你来拯救，因为所谓的恶龙是公主追求自由而找来的话剧演员。欧气爆棚到不战而胜，只能说不愧是你！";
        document.querySelector(".button-container").innerHTML = "";
        break;

        case 27:
          document.getElementById("story").innerHTML = "【你是幸运指数为零的天选之人】很抱歉，你没能满足成为天选之人的第一个条件————你最好别是天选之人————运气最差怎么不算是天选呢？猜拳打牌百分百输钱就算了，你走在街上的时候也要万分小心，毕竟身在中世纪的你很可能被天降粪水砸中失去性命。但这也意味着你必然会被选为目前成功率为零的屠龙勇者预备役！前路多艰，愿君珍重。";
          document.querySelector(".button-container").innerHTML = "";
          break;

          case 22:
            document.getElementById("story").innerHTML = "【你是就业前景惨淡的神灯精灵】比鬼神更可怕的是人心，人类被玩弄于你族股掌之间的时代已经过去了。现在的你，不被人类骗就不错了！比起维持你在文艺作品中的人气，你更担心的事情是自己被丧心病狂的穷鬼拿去熔成金子，作为一个很有安全意识的精灵你无心与英雄故事的主角博弈只想单纯地做一盏在黑暗中为路人照亮前方的明灯。啊，好亮！";
            document.querySelector(".button-container").innerHTML = "";
            break;

            case 21:
            case 30:
              document.getElementById("story").innerHTML = "【你是游离主线的吟游诗人】特立独行的你不屑于吟唱英雄赞歌，那些空有口号的骑士精神让你脚趾扣地，你只希望能获得平实的小幸福，比如打工地点有毛茸茸相伴。是的，中世纪的人们懂得亲密接触对训练动物来说多么重要，大部分音乐演出都会融入动物戏法（现代绝不提倡！），带着宠物一起上路，你正是音乐团体的一员。不得不说，游吟诗人不愧是故事里的智者，你拥有着生活大智慧。";
              document.querySelector(".button-container").innerHTML = "";
              break;

              case 29:
                document.getElementById("story").innerHTML = "【你是非典型性恶龙】没错，你就是可爱又迷人的反派角色。作为世界各地传说中的常驻NPC，你人气超高，信徒甚广。正邪不过是庸人的愚见你只愿践行自己心中的道，这样自由又强大的你实在是让人崇拜。没有人见过你的真身，因此没有人知道许多年前你曾是屠龙少年。你拒绝接受传统扁平的反派剧本，选择了混沌的灰色现实。";
                document.querySelector(".button-container").innerHTML = "";
                break;

      default:
        break;
    }
  }
