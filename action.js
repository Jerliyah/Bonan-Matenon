
/* :: Dictionary \/ Vortaro :: */

var dictionary = {
    Monday:    'Lundo'   ,
    Tuesday:   'Mardo'   ,
    Wednesday: 'Merkredo',
    Thursday:  'Ĵaŭdo'   ,
    Friday:    'Vendredo',
    Saturday:  'Sabato'  ,
    Sunday:    'Dimanĉo' ,

    January:   'Januaro'  ,
    February:  'Februaro' ,
    March:     'Marto'    ,
    April:     'Aprilo'   ,
    May:       'Mayo'     ,
    June:      'Junio'    ,
    July:      'Julio'    ,
    August:    'Aŭgusto'  ,
    September: 'Septembro',
    October:   'Oktobro'  ,
    November:  'Novembro' ,
    December:  'Decembro' ,

    Spring: 'Printempo',
    Summer: 'Somero'   ,
    Autumn: 'Aŭtuno'   ,
    Winter: 'Vintro'
}



/* :: Research :: */
var today = Date.today()

var day   = today.toString('dddd'),
    month = today.toString('MMMM'),
    year  = today.toString('yyyy')



/* :: Translate :: */
var hodiaux = dictionary[day]  ,
    monato  = dictionary[month]



/* :: Select :: */
var today_is = document.querySelector('span.today-is')




/* :: Insert  :: */
today_is.innerText = `${hodiaux}, ${monato}, ${year}`