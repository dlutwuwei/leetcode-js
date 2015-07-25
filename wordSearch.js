/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    var answer = false;
    var hove = new Array(board.length);
    var row = board.length;
    var col= board[0].length;
    if(row*col<word.length) return false;
    console.log(row,col, word.length)
    for(var i=0; i< row;i++){
        hove[i] = new Array(col)
        for(var j=0; j<col; j++){
            hove[i][j] = 0;
        }
    }
    for(var i=0; i< row; i++){
        for(var j=0; j < col; j++){
            if(board[i][j] == word[0]){
                var res = help(board, i, j, 0, word, hove);
                if(res) return res;
            }

            
            //return false;

        }
    }
    return answer;
};

function find(array, now, item){
    //for(var i=0; i<array.length; i++){
        if(array[now]==item)return true;
    //}
    return false;
}

function help(board,i, j,now, word, hove){

    if(now==word.length){
        console.log('找到', now,word)
        return true;
    }
    //console.log(hove, board, board[i][j], i,j ,now, word, find(word,now,board[i][j]));
    if(i<0||j<0||i>=board.length||j>=board[0].length ||hove[i][j]==1||
     !find(word,now,board[i][j]) )
        return false;

    hove[i][j]=1;

    //console.log(hove, board, board[i][j], i,j ,now, word);
    //console.log(hove, now, word)
    
    if(help(board, i, j+1, now+1, word, hove))
        return true;
    // hove[i][j]=0;
    if(help(board, i, j-1, now+1, word, hove))
        return true;
    if(help(board, i+1, j, now+1, word,hove)){
        return true;
    }
    // hove[i][j]=0;
    if(help(board, i-1, j, now+1, word, hove)){
        return true;
    }
    // hove[i][j] = 0;
    
    hove[i][j]=0;

}
console.time('exist');
//exist(["drgimmrzmyioqlbpeezsegxlohvwheslvatjmkkylsobgqskwtebbemqljosngdjgz","sulfuwxiafassxowypamhnyvgldlwlkrfwwzuvkwbkpvhfrhuuwcjuzpfddeopvunr","vkmfgpsxkzccjzyfbhzazgfekuthqhyltltzalxnmzpvypabybexkjbwfxevgchzpc","ysnxfbxwxxnzbldhlnqojynnttscsjetdtqkvpiupvtqjwxwlpkvnykhteloqqhtlz","ggpocgmwwvuvrgmddadnjxuulkmufyvlgmcjsohqjdlcjafoajeliyhtkwppukdcxf","lptugeytghtnyvwciecqzmmodibgkylyngsvkqrqakgygccojegkqubteccranppuj","ngaexcofcwhensivfaqgvwiznknezjompqqouhtwddcqxmocogkjcslscawcjmqaej","raqmwvraormcvaigmkyxcdxbhipxkwgbwyqvujviakkwkscwecvjfsmmcbknzsoytg","vnqsxqchopbqnfvjoadangeztftjdmqabityavhpkihyocjefmhssntnsoxydpyezr","fzpmobvyblckrhzybtnujilggoxgswaxvpkmshmwsoijwhkzdxwmfhunvrunpunmlz","afgmbadkjbtvawvwicdeqaxmqmidbvcbakqckvovwhryemvooatgbqsrfcwgxajymb","cwwqtuxktdyqspsnxtdqmksksskeqyfsuekoyharlbhfqasnvxfkkawcsjgkhoeeso","ssxukkvtpnvjdtjkftkbxemgquuuyoisggmsskoixltcgcnlvzptebzuvvrvjbnrjc","mcmaklldouidfdcwyiyxfvuwrfxgxhijjulviyawsizamdwmmukrsgpjmmpjvaueuh","behccambcahyntvzmnfbyrnpclpyrmftqnxtpjwtkdrxyowkbblbtbrxogwfsdylsv","ejfccriuogiktmngnihggxnedhhbuazajgdmxlilrsxkgktwtacbyrfdzmevofwylz","mimwtdoqqxdjtylvzlngqouvjjcfjoexwqtswjkognzzlmvmakuqypnhyqnjetgcmz","ukkfarszqgnnupxpgvevfelunrpvubwqngvnxqoqyedstdjbanxftkbierdyuzqiim","xfemxeqbwlgingxkorwpzaifafgrpofmwjatnqwlcctrlrbzkzqlabsagzrvpwhnhk","jwahkemfxxyyyiyqwatoazpuwhqgwaqfyspizbqwaoxazxqxxmlxndtkmksimiqmcf","xbgnyidxicuabtmnsasmmeyemkocwqjtupiuzmrhqnksgyhyyzkmfisrsgwrzfmtxx","nyjegzrstxqavrbidgqwaleyedfqwepjdyplaidthtwfmxnsgdoiquguynnuscgvbx","gdglypguutuhlcnbkdvsytflqxnysqxatfluvsoplkzymmzwrwqpswcitsioifoela","yguoxfzwdnkemcactsywcsomgyswefyensvkxwjcjtivxlyrdypisfuafoxktvqiol","tnhestzcoxnoqrnfbhkvirkfbfcuoqfjgpnaiocylqndjcikluhtmrapzdjnvrybin","dqbgqpwdshhdrtxaolupdtsoinfgrpvwfwcylabghljaggbuuvlxqdlyttgmibiqxn","olnrrveaxkiyhevsblypjtirfsspiscyfqqynuakhilqpgkqsihdbpviipyshcrosh","mhdmumxfcmlnefvmjzbehlvhedkxteegmjsgwrlydyliejunkxtrlozrtlonpuvbdp","jzhuakvnuzyqoiqhabxbsrmigdcbffqohxlhkiughtxvbnedqbgkuuscyudfzwvgvi","pfqkmzflwiaaoqeuayrubrogwpctyacnhuzvuegqngrbyxxavouyfihdylxylbltvl","oprxggfzjeyhevxzufjdijohhcivxggnvzkdgsepwcycywdudnxlynvgrfboljchio","mogtgevehvckpfzotycoevthkhqmoaccrjvxprdwoijeniuigyymuuveblsroutffp","cvihtwpccflxntvoipidtjrnafktkrkomuxirpkvuxsjtoxbffgbqxoseyoqqyeete","mmtzhnwcypqwsvdzyuynmdnatfbakweykzxrmwtklligjmhhifuwkkzgpagzymailx","bztvlhiupriwbqbxomhnsxpaynoyxbyzarwlaehpyplzhpwwbelvdbxbqlcomanmtj","zwnhllwzmgojcrpnosqlvhwxxkzkytvxrkgcyfdkltvpkkcyevjaehzbrbnpwipnsv","rsavdnoycblhzpclriutjmwwdsgshaqytsvygmyinjrobtbudwpmklkndsiktylosg","myukjjwaaxwbtzxjohuaxatfmmfzazimycyjmulmtjpnlnyzwuzvwscjghighsuhvv","sjpdvlpkaazybysatpvwadfkmodixydphvvegkqgksglqanlpkhropcadfibfmsojn","urxkzjcfwufkgxunokeqkkxvnejfssvmjuziebpawwmethtityaeiabvekazcvnnqm","xwqmyoilseulonlqrtquoxeryiolvgauesiditocxiplvbbpuujltoeryueubeqhyz","kguyirgyeebhtvbeiuuontjspmwftxgedaeorloxrpfmmiqvfljseuktgjacghgjjm","zdxnaqchcpqtmvgxpksafajhcrokcaxcdwrdpulrldkzaqwpcqrjrcrvthiyhfakdr","qsndmagwbipyztqrdhvufrbnpjurvzkluaogcwceeteenuxseumjnpycasvwtihniw","tkuyqzrufgreavamgoegseaoatwkhgiascajbufiawodtprbdvhxahlcdjmkrumkxn","vahaljzzmuoewtbfrbpeesqsehnqrmfmmopxyozmipsgluocvfibzyudgjvzvbojpd","hpriebxwkiqamofvrevnjdwedthrdzwkqpsuqrrcajcmxjjppfeyibfnuogxpcjgrd","akxtoxdrlacvrsawqkzxyvmevbjgjcmkmjfdgiurlwoeqoajbbgzxufuyqahtmthvz","kdhgxuflzvcbgddnecjlyheyrznkgiltovblpgyoeaskfxzlzlxxsbxlakyivjdjef","wunuktxcgczhoasnznqzysjwagggpmlngaitufxajzjzbcmdpccpulmxuufjgqzpsh","kmohozgyzkclntqpimcwlwqqizihobqapghefqegaisnbkcjyegkbyalzlsnmkpbqx","hxnnenvycwieigkqsnovyogsductxssfqfuuuquyocewkomfedaetgxycztzulgmsb","iorcmhgqgshuxlxxrsforhqmhmypysqihjmvrsoxkxrikrfblnqeuirdurvujlesvq","qoignudgcnxkqlxgptqgzmzuilfmdccvsmbfhemjtlvkwssmojunxujgfqsktxgljj","tqqfajqvtnqobezvtwreeyuxlpwtdfcwwsbyetvzinnjtmhmlaspznokckdfqhboae","meyjdgxtsqfzfszxiamwkpjpwzxypzcddcmillbdejelbfklgxksotikufijenmjry","tcmxfqglbjrlxxkhpyaxjuetfkirvarpedmktuvwfokclulbvlaghhzmtkfpmxeqas","awmystmcwazhduvfcembtgnyvzvbqwtsuhsmahrwhsgkodpqhetamhzhgwkyudroml","dmsulzotlcwdsdjnevufedbodwtumfgptaleczxpbtsvzdjfyfkcknsolliyqqpkrb","qvcqkgjfbkimpjuznepgsatdakvqwotojveubqzfahrqsnrgsgmkjfpjrlzpbsglqk","hrcgwdpqvidoqxxeigjzpdmruolabbnitpqrufjrpnihkflulxuaaitwwfxxgmfbdx","tadcrurzccepyrmusmdllzskzzwgazetzjytfpujtzzsslmmapalrsvsrryusenunn","ntdhewidobpdnrsnclgxdzqetkijeywrtbbxylboosrcjmrnzzkfbcjumtfrrckmfn","kdznspflrqxldxmpcnrnkfipwatjozyyezlypskiijtliiamxrzhxizvkugyvfzagk","avfkenwzzehztftsoscppokyphfqjlckhhwlvukwzuvszqmpkrfahrayyfoiqruzys","kvnxrorpgshuhsnmuvfuvebkordkrdcdzpasfthnlpithxhdunxqtycjrftkixojpq","cukjivasqjpymknlailcrdjmnrjddyufvgqdbrvsamspwhaypmcgpnsehdkkegrzmh","epabjdnbsmiumzgrfxezeldoxhwogiykzyljdamvmxqzwyscwwbaieqfnmwvwuhvss","eyvrvholikmaoizskjwaqmomhkgphbjozefwoviyhwbweaoqlmsbagoiswzzzipapu","xdrhdzdgxjinztbtvcblmtjlujtklkgipyrtzuzyfingdozysaletvpqglcrvicnit","gjqhjvrwcvlbvdehkzebpmmrfkchxmdfwtmfqecubpwwucdebjgrvukbgokfbpkxkz","ebfivgxtcsviyxrgqpbaqjpcpqszpcytdfeblbuqvsywprcfgfhypybeotdfvebbjf","cxiyneqlaheemlkwjzukdlfisbmteyygvjeknxxpebttmdpyclkhwqqptekxcldzuj","jhigynkrgyxxwbihjhzzwsfipktujnfvwodudnojmlikmqrxzswxkegbozxzpfulta","iynwjbjrmxjfvjytgkxmmlolldqholhwjvuswdlibvqweopmypzmanalqqtgeadpxz","kwdvggqwewkvjlkkxlxzypqtvwwalvavrdryljupghmrsxbrkaripjekfalsvnopqh","ndqjuysgpmdsgnszyhicupehhzuxqmedpvpjthpluvdckwbifjmzaqgjsahimlodid","oemgpibuknslwywkxybgivgpfvctylynrntivwcijvthtsssqvyaqhrxcwrchrraem","icikkuhfbczvvsqvsicmgeizjrqarxnzzxjjrtqvvqqqijmcrqoxvwygnpiemvdnvp","yoiojdgawojktcahcxgadtpmadjdqeuotefeklggcrqvuqewokwteohetrjkxgaskf","xurdctxsqrlupbfnwlberxvahugjntpmnirsbomtfxnuaukzhndykaztuhdhastqal","idzuyhunduinvpbyolyphvwkczeypglxlmrjtnwzkgofypeodefmzbwecacripqtbk","exxcwhlknjctzhxetxhrdktfdbuuwxeaubesjpfyyjrzsodnnneqzzxcctwyraanee","gpwnnwwewosbbiohapgysitoimriaxoimkvzhtdfjxgmhxtimbiejbvtoodqltyzev","ynqduzcclkzguohcusdrltfojsjjtnercwwyvzbilaofqxhlpmccgksrecbyrhpweo","ubnvkayyfoyoznacqioiasmbqeiiaowuqjsalqaqeyggoikeryotqdwhhgphvldlwv","nhnnzsohycpiiiiybybxhkewtbjxmhuzqiorceycgomqyupasszcdfywgkvurqvkam","bcqaexqqpomeqgzsiczjaitwcmoawomascawbsoricxziwtrasabavxfhnfgbrgtvi","rxahqkjnltmekmzmnbhmgpznxcgdvcnobpxrzielcqrodqbsuihcxiqulyziamzbdw","sdfzqhphvuawpuhwweeobrncaprztuvlzcmplcxhyxfntmjrtqgwhvyjkridmgrlkd","dwhafgzmvuzfluxtseosqbkygygzlrfonmquupgqjhxvbuovafoqiyroyzqjsvyhho","begiurptotnfopkeiscbicaymtvmafccjkmfcdyqwnvnchrmzwnkyqkmlgalldpund","zrhxidmfqonidogqaeilrtrrfewwamazdjynmmvfaipdyvwzbeksydmfhidhwficoi","pdukkwuzctwasxgesehglqqrznwjpntgqntclpdpizpcywgscnaqfrhegfnxsgfkvy","mjopyyqqbrohlsxmicfrhlxukrdpcyqqheiieayfropfgmrpowixjfuvxxkbxathgb"], "lcpsvdhalttairlfa");
//console.log(exist(["a"], "a"))
//exist(["CAA","AAA","BCD"], "AAB")
//console.log(exist(["ab","cd"], "abcd"));
console.log(exist(["aaaa","aaaa","aaaa"], "aaaaaaaaaaab"))
exist(["ABCE",
  "SFCS",
  "ADEE"],'SEE')
console.timeEnd('exist')




