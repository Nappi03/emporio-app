// Elenco dei prodotti estratti dal PDF (divisi in 2 categorie)
const prodottiPredefiniti = [
    // --- PRODOTTI AGEA ---
    { barcode: "4737016787248", name: "BORLOTTI AGEA", category: "CODICI EAN PRODOTTI AGEA" },
    { barcode: "3095616447261", name: "LENTICCHIE AGEA", category: "CODICI EAN PRODOTTI AGEA" },
    { barcode: "6543020168014", name: "CECI AGEA", category: "CODICI EAN PRODOTTI AGEA" },
    { barcode: "5996775475110", name: "ZUPPE CON CEREALI", category: "CODICI EAN PRODOTTI AGEA" },
    { barcode: "5694818542798", name: "SEDANI AGEA PASTA", category: "CODICI EAN PRODOTTI AGEA" },
    { barcode: "3632660275411", name: "PENNE AGEA 500g", category: "CODICI EAN PRODOTTI AGEA" },
    { barcode: "1017607513030", name: "SPAGHETTI AGEA 500G", category: "CODICI EAN PRODOTTI AGEA" },
    { barcode: "7643113791576", name: "BISCOTTI FROLLINI AGEA", category: "CODICI EAN PRODOTTI AGEA" },
    { barcode: "4577227951010", name: "BISCOTTI INFANZIA AGEA", category: "CODICI EAN PRODOTTI AGEA" },
    { barcode: "9819340904791", name: "RISO AGEA 1KG", category: "CODICI EAN PRODOTTI AGEA" },
    { barcode: "9382040583400", name: "FARINA AGEA 1KG", category: "CODICI EAN PRODOTTI AGEA" },
    { barcode: "1371675448046", name: "LATTE AGEA", category: "CODICI EAN PRODOTTI AGEA" },
    { barcode: "3025980125984", name: "CONFETTURA AGEA", category: "CODICI EAN PRODOTTI AGEA" },
    { barcode: "7962365827575", name: "POMODORI PELATI AGEA", category: "CODICI EAN PRODOTTI AGEA" },
    { barcode: "2854286632046", name: "MINESTRONE AGEA", category: "CODICI EAN PRODOTTI AGEA" },
    { barcode: "3320901654476", name: "MACEDONIA AGEA", category: "CODICI EAN PRODOTTI AGEA" },
    { barcode: "8825351892928", name: "OMOGENEIZZATI AGEA", category: "CODICI EAN PRODOTTI AGEA" },
    { barcode: "8713135541776", name: "TONNO AGEA 80g", category: "CODICI EAN PRODOTTI AGEA" },
    { barcode: "8393982866965", name: "PECORINO TOSCANO", category: "CODICI EAN PRODOTTI AGEA" },
    { barcode: "5171573972829", name: "OLIO DI SEMI AGEA", category: "CODICI EAN PRODOTTI AGEA" },
    { barcode: "9437859311222", name: "CAFFE AGEA", category: "CODICI EAN PRODOTTI AGEA" },
    { barcode: "9686105962026", name: "SUCCHI BRICK 200ML", category: "CODICI EAN PRODOTTI AGEA" },

    // --- MARCHE VARIE ---
    { barcode: "3834156930341", name: "FAGIOLI ALTRE MARCHE", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "9083324313606", name: "LENTICCHIE ALTRE MARCHE", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "1889937887873", name: "CECI ALTRE MARCHE", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "1785620467141", name: "MAIS ALTRE MARCHE", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "3608846900453", name: "PATATE NOVELLE", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "4629881555957", name: "FUNGHI IN BARATTOLO", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "1382655115667", name: "PEPERONI IN BARATTOLO", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "5052146035120", name: "LEGUMI PICCOLI A.M. 150g", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "2095109807894", name: "PANNA CUCINA DA 500ML", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "7625399396010", name: "PANNA CUCINA DA 200ML", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "2034847014492", name: "DADO DA CUCINA", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "3651694850661", name: "PANETTONI E COLOMBE", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "5300883565883", name: "PASTA ALTRE MARCHE 500g", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "4658093968057", name: "PASTA ALTRE MARCHE 1KG", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "3068605711414", name: "PASTINE E CREMINE INFANZIA", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "3805223120934", name: "RISO ALTRE MARCHE", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "8929929040862", name: "FARINA 1KG ALTRE MARCHE", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "1923334576623", name: "FARINA 5KG ALTRE MARCHE", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "3777838921346", name: "BISCOTTI VARIE MARCHE", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "9843946342220", name: "FETTE BISCOTTATE VARIE", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "1490206772969", name: "CRACKERS VARIE MARCHE", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "7968880557294", name: "MERENDINE ALTRE MARCHE", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "2487987744345", name: "SUCCHI BRICK 200ML ALTRE M.", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "7533830145151", name: "CONFETTURA ALTRE MARCHE", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "8938112281371", name: "SALAME A FETTE 80g", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "1320244796477", name: "PROSCIUTTO A FETTE 60g", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "8265880879111", name: "LEGUMI SECCHI", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "6428379551390", name: "POMODORI PELATI 400G", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "8131633433575", name: "POMODORI PELATI 800g", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "8374026538550", name: "PASSATE DI POMODORO", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "2893116288107", name: "POMODORO CONCENTRATO", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "8084351845529", name: "SUGHI PRONTI ALTRE M.", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "2446968228762", name: "OLIO EXTRAV. 1LT", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "8508521246423", name: "OLIO DI SEMI ALTRE M. 1LT", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "2674811454390", name: "TONNO ALTRE MARCHE 80g", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "5940169387138", name: "TONNO ALTRE M. 120g", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "6795214908917", name: "SIMMENTAL", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "4915773336231", name: "MINESTRONE SURGELATO", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "5199109707868", name: "CORDON BLUE", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "6766427694294", name: "SOFFICINI SURGELATI", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "1820608817096", name: "BASTONCINI SURGELATI", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "8839121238212", name: "FILETTI DI PANCASIO", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "8002710411147", name: "FORMAGGIO GRATTUGGIATO", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "5691159344524", name: "PHILADELPHIA", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "4799935967101", name: "CERTOSINO FRESCO", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "5903078998116", name: "LATTE ALTRE MARCHE", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "3136829694766", name: "ZUCCHERO ALTRE MARCHE", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "5751432439641", name: "SALE FINO E GROSSO", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "7308215398220", name: "OMOGENEIZZATI", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "1796469737845", name: "PREPARATO PURE'", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "4624853181530", name: "PANE GRATTUGGIATO", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "1477387179251", name: "ASSORBENTI", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "2399593245119", name: "PANNOLINI", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "1070026087711", name: "COLLUTTORIO 500ML", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "8971096597359", name: "SACCHETTI PATTUMIERA", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "1902926830787", name: "DETERSIVO LAVASTOVIGLIE", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "9956234564454", name: "COLLUTTORIO 95ML", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "6268376054124", name: "WC NET", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "2067886680670", name: "BICCHIERI MONOUSO", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "7206844780617", name: "PET FOOD", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "9232848884752", name: "DETERSIVO PAVIMENTI", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "3673100593313", name: "SGRASSATORE", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "7623676869851", name: "SHAMPOO 500ML", category: "CODICI EAN PRODOTTI MARCHE VARIE" },
    { barcode: "8001480710399", name: "IGIENIZZANTE SPRAY", category: "CODICI EAN PRODOTTI MARCHE VARIE" }
];

// Funzione richiamata da index.html per popolare il DB
function eseguiPrecaricamentoCatalogo(db, callbackSuccesso) {
    const transaction = db.transaction(["prodotti"], "readonly");
    const objectStore = transaction.objectStore("prodotti");
    const countRequest = objectStore.count();

    countRequest.onsuccess = function() {
        if (countRequest.result === 0) {
            console.log("Il Database è vuoto. Avvio l'importazione da catalogo.js...");
            const insertTransaction = db.transaction(["prodotti"], "readwrite");
            const store = insertTransaction.objectStore("prodotti");
            
            prodottiPredefiniti.forEach((item, index) => {
                store.add({
                    id: Date.now() + index, 
                    barcode: item.barcode,
                    name: item.name,
                    category: item.category
                });
            });

            insertTransaction.oncomplete = function() {
                alert("🎉 Catalogo iniziale caricato con successo nel database!");
                if(callbackSuccesso) callbackSuccesso();
            };
        } else {
            // Se non è vuoto, i dati ci sono già, disegniamo e basta
            if(callbackSuccesso) callbackSuccesso();
        }
    };
}