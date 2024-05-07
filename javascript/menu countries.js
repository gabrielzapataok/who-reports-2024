var countryProfileFilter = {
    region: '',
    name: ''
};

var countryProfileList = JSON.parse(`{
    "AFG":{"name":"Afghanistan","region":"EMRO","iso3code":"AFG","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/afg.jpg?sfvrsn=50397ea4_20)"},"ALB":{"name":"Albania","region":"EURO","iso3code":"ALB","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/alb.jpg?sfvrsn=45c1de0b_26)"},"DZA":{"name":"Algeria","region":"AFRO","iso3code":"DZA","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/dza.jpg?sfvrsn=46d21f1a_17)"},"ASM":{"name":"American Samoa","region":"WPRO","iso3code":"ASM","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/ams.jpg?sfvrsn=6b7063e9_11)"},"AGO":{"name":"Angola","region":"AFRO","iso3code":"AGO","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/ago.jpg?sfvrsn=5f49ef43_18)"},"ATG":{"name":"Antigua and Barbuda","region":"AMRO","iso3code":"ATG","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/atg.jpg?sfvrsn=251d674b_22)"},"ARG":{"name":"Argentina","region":"AMRO","iso3code":"ARG","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/arg.jpg?sfvrsn=b6913b76_22)"},"ARM":{"name":"Armenia","region":"EURO","iso3code":"ARM","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/arm.jpg?sfvrsn=f7bc990d_19)"},"AZE":{"name":"Azerbaijan","region":"EURO","iso3code":"AZE","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/aze.jpg?sfvrsn=40452dae_19)"},"BHS":{"name":"Bahamas","region":"AMRO","iso3code":"BHS","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/bhs.jpg?sfvrsn=8b170bec_19)"},"BHR":{"name":"Bahrain","region":"EMRO","iso3code":"BHR","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/bhr.jpg?sfvrsn=62a273e3_19)"},"BGD":{"name":"Bangladesh","region":"SEARO","iso3code":"BGD","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/bgd.jpg?sfvrsn=863cfc3e_19)"},"BRB":{"name":"Barbados","region":"AMRO","iso3code":"BRB","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/brb.jpg?sfvrsn=80cdbcfd_19)"},"BLR":{"name":"Belarus","region":"EURO","iso3code":"BLR","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/blr.jpg?sfvrsn=f35d79c2_15)"},"BLZ":{"name":"Belize","region":"AMRO","iso3code":"BLZ","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/blz.jpg?sfvrsn=787672a7_22)"},"BEN":{"name":"Benin","region":"AFRO","iso3code":"BEN","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/ben.jpg?sfvrsn=4573733_19)"},"BTN":{"name":"Bhutan","region":"SEARO","iso3code":"BTN","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/btn.jpg?sfvrsn=4e71ec3f_19)"},"BOL":{"name":"Bolivia (Plurinational State of)","region":"AMRO","iso3code":"BOL","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/bol.jpg?sfvrsn=81944760_19)"},"BIH":{"name":"Bosnia and Herzegovina","region":"EURO","iso3code":"BIH","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/bih.jpg?sfvrsn=58fad8c_19)"},"BWA":{"name":"Botswana","region":"AFRO","iso3code":"BWA","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/bwa.jpg?sfvrsn=d7c6371e_19)"},"BRA":{"name":"Brazil","region":"AMRO","iso3code":"BRA","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/bra.jpg?sfvrsn=c9f0d1fc_22)"},"BRN":{"name":"Brunei Darussalam","region":"WPRO","iso3code":"BRN","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/brn.jpg?sfvrsn=dd4f3c5a_22)"},"BGR":{"name":"Bulgaria","region":"EURO","iso3code":"BGR","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/bgr.jpg?sfvrsn=f99e63b5_19)"},"BFA":{"name":"Burkina Faso","region":"AFRO","iso3code":"BFA","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/bfa.jpg?sfvrsn=b681c831_19)"},"BDI":{"name":"Burundi","region":"AFRO","iso3code":"BDI","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/bdi.jpg?sfvrsn=c96064b0_19)"},"CPV":{"name":"Cabo Verde","region":"AFRO","iso3code":"CPV","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/cpv.jpg?sfvrsn=56a46e1c_17)"},"KHM":{"name":"Cambodia","region":"WPRO","iso3code":"KHM","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/khm.jpg?sfvrsn=8f584d10_17)"},"CMR":{"name":"Cameroon","region":"AFRO","iso3code":"CMR","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/cmr.jpg?sfvrsn=f21bfc85_19)"},"CAF":{"name":"Central African Republic","region":"AFRO","iso3code":"CAF","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/caf.jpg?sfvrsn=a7b7add8_19)"},"TCD":{"name":"Chad","region":"AFRO","iso3code":"TCD","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/tcd.jpg?sfvrsn=4ebcfca9_22)"},"CHL":{"name":"Chile","region":"AMRO","iso3code":"CHL","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/chl.jpg?sfvrsn=466c8d6_21)"},"CHN":{"name":"China","region":"WPRO","iso3code":"CHN","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/chn.jpg?sfvrsn=d67a342f_19)"},"COL":{"name":"Colombia","region":"AMRO","iso3code":"COL","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/col.jpg?sfvrsn=277447e7_19)"},"COM":{"name":"Comoros","region":"AFRO","iso3code":"COM","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/com.jpg?sfvrsn=97e51693_17)"},"COG":{"name":"Congo","region":"AFRO","iso3code":"COG","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/cog.jpg?sfvrsn=9b1f00a2_15)"},"COK":{"name":"Cook Islands","region":"WPRO","iso3code":"COK","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/cok.jpg?sfvrsn=ec51cefc_23)"},"CRI":{"name":"Costa Rica","region":"AMRO","iso3code":"CRI","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/cri.jpg?sfvrsn=e61dfaa0_15)"},"CIV":{"name":"Côte d'Ivoire","region":"AFRO","iso3code":"CIV","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/civ.jpg?sfvrsn=ec18df5_19)"},"HRV":{"name":"Croatia","region":"EURO","iso3code":"HRV","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/hrv.jpg?sfvrsn=95af059c_19)"},"CUB":{"name":"Cuba","region":"AMRO","iso3code":"CUB","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/cub.jpg?sfvrsn=cfdb8d9c_15)"},"CYP":{"name":"Cyprus","region":"EURO","iso3code":"CYP","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/cyp.jpg?sfvrsn=8ff57666_15)"},"CZE":{"name":"Czechia","region":"EURO","iso3code":"CZE","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/cze.jpg?sfvrsn=bbbc481_15)"},"PRK":{"name":"Democratic People's Republic of Korea","region":"SEARO","iso3code":"PRK","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/prk.jpg?sfvrsn=62a3bb26_19)"},"COD":{"name":"Democratic Republic of the Congo","region":"AFRO","iso3code":"COD","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/cod.jpg?sfvrsn=d567fde9_22)"},"DJI":{"name":"Djibouti","region":"EMRO","iso3code":"DJI","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/dji.jpg?sfvrsn=d3154307_17)"},"DMA":{"name":"Dominica","region":"AMRO","iso3code":"DMA","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/dma.jpg?sfvrsn=22984f55_17)"},"DOM":{"name":"Dominican Republic","region":"AMRO","iso3code":"DOM","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/dom.jpg?sfvrsn=d9f5c908_17)"},"ECU":{"name":"Ecuador","region":"AMRO","iso3code":"ECU","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/ecu.jpg?sfvrsn=908ee6e3_17)"},"EGY":{"name":"Egypt","region":"EMRO","iso3code":"EGY","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/egy.jpg?sfvrsn=2a3d7056_17)"},"SLV":{"name":"El Salvador","region":"AMRO","iso3code":"SLV","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/slv.jpg?sfvrsn=fbb1b05d_17)"},"GNQ":{"name":"Equatorial Guinea","region":"AFRO","iso3code":"GNQ","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/gnq.jpg?sfvrsn=9e98ca6c_18)"},"ERI":{"name":"Eritrea","region":"AFRO","iso3code":"ERI","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/eri.jpg?sfvrsn=a0ef788c_18)"},"EST":{"name":"Estonia","region":"EURO","iso3code":"EST","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/est.jpg?sfvrsn=5a30b1e1_39)"},"SWZ":{"name":"Eswatini","region":"AFRO","iso3code":"SWZ","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/swz.jpg?sfvrsn=be956dc4_15)"},"ETH":{"name":"Ethiopia","region":"AFRO","iso3code":"ETH","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/eth.jpg?sfvrsn=f2b74b11_15)"},"FJI":{"name":"Fiji","region":"WPRO","iso3code":"FJI","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/fji.jpg?sfvrsn=5c46b3c3_18)"},"PYF":{"name":"French Polynesia","region":"WPRO","iso3code":"PYF","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/xxx.png?sfvrsn=69831d8a_15)"},"GAB":{"name":"Gabon","region":"AFRO","iso3code":"GAB","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/gab.jpg?sfvrsn=916189a7_18)"},"GMB":{"name":"Gambia","region":"AFRO","iso3code":"GMB","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/gmb.jpg?sfvrsn=c8cf7ac1_18)"},"GEO":{"name":"Georgia","region":"EURO","iso3code":"GEO","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/geo.jpg?sfvrsn=5643602_18)"},"GHA":{"name":"Ghana","region":"AFRO","iso3code":"GHA","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/gha.jpg?sfvrsn=74a0c5f3_18)"},"GRC":{"name":"Greece","region":"EURO","iso3code":"GRC","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/grc.jpg?sfvrsn=d66bf3b5_18)"},"GRD":{"name":"Grenada","region":"AMRO","iso3code":"GRD","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/grd.jpg?sfvrsn=b7e146e4_18)"},"GTM":{"name":"Guatemala","region":"AMRO","iso3code":"GTM","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/gtm.jpg?sfvrsn=f1a836e3_18)"},"GIN":{"name":"Guinea","region":"AFRO","iso3code":"GIN","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/gin.jpg?sfvrsn=55f3a865_18)"},"GNB":{"name":"Guinea-Bissau","region":"AFRO","iso3code":"GNB","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/gnb.jpg?sfvrsn=ba12348a_18)"},"GUY":{"name":"Guyana","region":"AMRO","iso3code":"GUY","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/guy.jpg?sfvrsn=bcdb9157_18)"},"HTI":{"name":"Haiti","region":"AMRO","iso3code":"HTI","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/hti_22cb1ec4-e884-43c2-9ea4-17e16412b979.jpg?sfvrsn=aacebde6_20)"},"HND":{"name":"Honduras","region":"AMRO","iso3code":"HND","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/hnd.jpg?sfvrsn=6a736a7a_18)"},"HUN":{"name":"Hungary","region":"EURO","iso3code":"HUN","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/hun.jpg?sfvrsn=a293cc42_19)"},"IND":{"name":"India","region":"SEARO","iso3code":"IND","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/ind.jpg?sfvrsn=ecc6f6e5_17)"},"IDN":{"name":"Indonesia","region":"SEARO","iso3code":"IDN","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/idn.jpg?sfvrsn=beecae7e_18)"},"IRN":{"name":"Iran (Islamic Republic of)","region":"EMRO","iso3code":"IRN","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/irn.jpg?sfvrsn=390d10f1_18)"},"IRQ":{"name":"Iraq","region":"EMRO","iso3code":"IRQ","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/irq.jpg?sfvrsn=72389da9_17)"},"ISR":{"name":"Israel","region":"EURO","iso3code":"ISR","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/isr.jpg?sfvrsn=b6c7bf8e_17)"},"JAM":{"name":"Jamaica","region":"AMRO","iso3code":"JAM","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/jam.jpg?sfvrsn=904c9a8c_17)"},"JOR":{"name":"Jordan","region":"EMRO","iso3code":"JOR","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/jor.jpg?sfvrsn=2499a4f_18)"},"KAZ":{"name":"Kazakhstan","region":"EURO","iso3code":"KAZ","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/kaz.jpg?sfvrsn=b9a2ad18_18)"},"KEN":{"name":"Kenya","region":"AFRO","iso3code":"KEN","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/ken.jpg?sfvrsn=ac56bdc2_17)"},"KIR":{"name":"Kiribati","region":"WPRO","iso3code":"KIR","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/kir.jpg?sfvrsn=ee7a1d4d_19)"},"KWT":{"name":"Kuwait","region":"EMRO","iso3code":"KWT","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/kwt.jpg?sfvrsn=3b1b131c_17)"},"KGZ":{"name":"Kyrgyzstan","region":"EURO","iso3code":"KGZ","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/kgz.jpg?sfvrsn=2fa0a18_18)"},"LAO":{"name":"Lao People's Democratic Republic","region":"WPRO","iso3code":"LAO","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/lao.jpg?sfvrsn=4b0fc709_20)"},"LVA":{"name":"Latvia","region":"EURO","iso3code":"LVA","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/lva.jpg?sfvrsn=5900e421_18)"},"LBN":{"name":"Lebanon","region":"EMRO","iso3code":"LBN","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/lbn.jpg?sfvrsn=514dceeb_17)"},"LSO":{"name":"Lesotho","region":"AFRO","iso3code":"LSO","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/lso.jpg?sfvrsn=7454f9ab_17)"},"LBR":{"name":"Liberia","region":"AFRO","iso3code":"LBR","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/lbr.jpg?sfvrsn=627955aa_18)"},"LBY":{"name":"Libya","region":"EMRO","iso3code":"LBY","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/lby.jpg?sfvrsn=80ba6e27_28)"},"LTU":{"name":"Lithuania","region":"EURO","iso3code":"LTU","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/ltu.jpg?sfvrsn=79b04142_18)"},"MDG":{"name":"Madagascar","region":"AFRO","iso3code":"MDG","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/mdg.jpg?sfvrsn=603e2e9d_17)"},"MWI":{"name":"Malawi","region":"AFRO","iso3code":"MWI","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/mwi.jpg?sfvrsn=d55f1bac_13)"},"MYS":{"name":"Malaysia","region":"WPRO","iso3code":"MYS","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/mys.jpg?sfvrsn=f2d943bb_18)"},"MDV":{"name":"Maldives","region":"SEARO","iso3code":"MDV","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/mdv.jpg?sfvrsn=c1f30dd_18)"},"MLI":{"name":"Mali","region":"AFRO","iso3code":"MLI","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/mli.jpg?sfvrsn=7864156c_17)"},"MLT":{"name":"Malta","region":"EURO","iso3code":"MLT","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/mlt.jpg?sfvrsn=b193a760_18)"},"MHL":{"name":"Marshall Islands","region":"WPRO","iso3code":"MHL","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/mhl.jpg?sfvrsn=e11ac538_17)"},"MRT":{"name":"Mauritania","region":"AFRO","iso3code":"MRT","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/mrt.jpg?sfvrsn=94770607_17)"},"MUS":{"name":"Mauritius","region":"AFRO","iso3code":"MUS","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/mus.jpg?sfvrsn=4ad0b0e9_17)"},"MEX":{"name":"Mexico","region":"AMRO","iso3code":"MEX","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/mex.jpg?sfvrsn=65251ff6_17)"},"FSM":{"name":"Micronesia","region":"WPRO","iso3code":"FSM","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/fsm.jpg?sfvrsn=c8dce3f1_18)"},"MNG":{"name":"Mongolia","region":"WPRO","iso3code":"MNG","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/mng.jpg?sfvrsn=8136e123_17)"},"MNE":{"name":"Montenegro","region":"EURO","iso3code":"MNE","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/mne.jpg?sfvrsn=14803f4e_17)"},"MAR":{"name":"Morocco","region":"EMRO","iso3code":"MAR","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/mar.jpg?sfvrsn=cd5f9d56_18)"},"MOZ":{"name":"Mozambique","region":"AFRO","iso3code":"MOZ","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/moz.jpg?sfvrsn=258a8132_18)"},"MMR":{"name":"Myanmar","region":"SEARO","iso3code":"MMR","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/mmr.jpg?sfvrsn=68927b16_17)"},"NAM":{"name":"Namibia","region":"AFRO","iso3code":"NAM","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/nam.jpg?sfvrsn=1e0e0d11_18)"},"NRU":{"name":"Nauru","region":"WPRO","iso3code":"NRU","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/nru.jpg?sfvrsn=d680319d_20)"},"NPL":{"name":"Nepal","region":"SEARO","iso3code":"NPL","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/npl.jpg?sfvrsn=2d45352e_17)"},"NIC":{"name":"Nicaragua","region":"AMRO","iso3code":"NIC","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/nic.jpg?sfvrsn=6f71e8c7_17)"},"NER":{"name":"Niger","region":"AFRO","iso3code":"NER","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/ner.jpg?sfvrsn=bc2fd7c5_17)"},"NGA":{"name":"Nigeria","region":"AFRO","iso3code":"NGA","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/nga.jpg?sfvrsn=a6927d66_17)"},"NIU":{"name":"Niue","region":"WPRO","iso3code":"NIU","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/niu.jpg?sfvrsn=72954a94_15)"},"MKD":{"name":"North Macedonia","region":"EURO","iso3code":"MKD","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/mkd.jpg?sfvrsn=68364ce3_15)"},"MNP":{"name":"Northern Mariana Islands","region":"WPRO","iso3code":"MNP","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/xxx.png?sfvrsn=69831d8a_15)"},"PSE":{"name":"occupied Palestinian territory","region":"EMRO","iso3code":"PSE","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/xxx.png?sfvrsn=69831d8a_15)"},"OMN":{"name":"Oman","region":"EMRO","iso3code":"OMN","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/omn.jpg?sfvrsn=7650e7af_17)"},"PAK":{"name":"Pakistan","region":"EMRO","iso3code":"PAK","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/pak.jpg?sfvrsn=796e3fe5_17)"},"PLW":{"name":"Palau","region":"WPRO","iso3code":"PLW","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/plw.jpg?sfvrsn=c004b0aa_17)"},"PAN":{"name":"Panama","region":"AMRO","iso3code":"PAN","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/pan.jpg?sfvrsn=c437be5f_17)"},"PNG":{"name":"Papua New Guinea","region":"WPRO","iso3code":"PNG","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/png.jpg?sfvrsn=72a472a4_17)"},"PRY":{"name":"Paraguay","region":"AMRO","iso3code":"PRY","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/pry.jpg?sfvrsn=6e81cb42_17)"},"PER":{"name":"Peru","region":"AMRO","iso3code":"PER","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/per.jpg?sfvrsn=d386402a_17)"},"PHL":{"name":"Philippines","region":"WPRO","iso3code":"PHL","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/phl.jpg?sfvrsn=97d16a90_17)"},"POL":{"name":"Poland","region":"EURO","iso3code":"POL","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/pol.jpg?sfvrsn=a40640c9_17)"},"PRT":{"name":"Portugal","region":"EURO","iso3code":"PRT","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/prt.jpg?sfvrsn=1e528be0_17)"},"QAT":{"name":"Qatar","region":"EMRO","iso3code":"QAT","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/qar.jpg?sfvrsn=2ac84c95_41)"},"MDA":{"name":"Republic of Moldova","region":"EURO","iso3code":"MDA","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/mda.jpg?sfvrsn=5b323e4b_18)"},"ROU":{"name":"Romania","region":"EURO","iso3code":"ROU","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/rou.jpg?sfvrsn=49ecbbaa_17)"},"RUS":{"name":"Russian Federation","region":"EURO","iso3code":"RUS","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/rus.jpg?sfvrsn=f545ea74_17)"},"RWA":{"name":"Rwanda","region":"AFRO","iso3code":"RWA","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/rwa.jpg?sfvrsn=7ff2101c_17)"},"KNA":{"name":"Saint Kitts and Nevis","region":"AMRO","iso3code":"KNA","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/kna.jpg?sfvrsn=1dcfafc7_17)"},"LCA":{"name":"Saint Lucia","region":"AMRO","iso3code":"LCA","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/lca.jpg?sfvrsn=5aff21e2_18)"},"VCT":{"name":"Saint Vincent and the Grenadines","region":"AMRO","iso3code":"VCT","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/vct.jpg?sfvrsn=4532e5b_18)"},"WSM":{"name":"Samoa","region":"WPRO","iso3code":"WSM","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/wsm.jpg?sfvrsn=2f8964bb_18)"},"STP":{"name":"Sao Tome and Principe","region":"AFRO","iso3code":"STP","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/stp.jpg?sfvrsn=3523f44f_15)"},"SAU":{"name":"Saudi Arabia","region":"EMRO","iso3code":"SAU","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/sau.jpg?sfvrsn=5ff1b689_17)"},"SEN":{"name":"Senegal","region":"AFRO","iso3code":"SEN","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/sen.jpg?sfvrsn=366253cc_17)"},"SRB":{"name":"Serbia","region":"EURO","iso3code":"SRB","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/srb.jpg?sfvrsn=ea27dbdd_15)"},"SYC":{"name":"Seychelles","region":"AFRO","iso3code":"SYC","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/syc.jpg?sfvrsn=362afc1a_20)"},"SLE":{"name":"Sierra Leone","region":"AFRO","iso3code":"SLE","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/sle.jpg?sfvrsn=c4be7017_18)"},"SVK":{"name":"Slovakia","region":"EURO","iso3code":"SVK","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/svk.jpg?sfvrsn=29a1f9c3_17)"},"SVN":{"name":"Slovenia","region":"EURO","iso3code":"SVN","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/svn.jpg?sfvrsn=f2ed47e3_18)"},"SLB":{"name":"Solomon Islands","region":"WPRO","iso3code":"SLB","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/slb.jpg?sfvrsn=e91aa80e_17)"},"SOM":{"name":"Somalia","region":"EMRO","iso3code":"SOM","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/som.jpg?sfvrsn=d39f240a_17)"},"ZAF":{"name":"South Africa","region":"AFRO","iso3code":"ZAF","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/zaf.jpg?sfvrsn=a0c0a9f5_18)"},"SSD":{"name":"South Sudan","region":"AFRO","iso3code":"SSD","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/ssd.jpg?sfvrsn=b508f495_17)"},"LKA":{"name":"Sri Lanka","region":"SEARO","iso3code":"LKA","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/lka.jpg?sfvrsn=2aeb1f8c_18)"},"SDN":{"name":"Sudan","region":"EMRO","iso3code":"SDN","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/sdn.jpg?sfvrsn=5b5603e6_17)"},"SUR":{"name":"Suriname","region":"AMRO","iso3code":"SUR","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/sur.jpg?sfvrsn=f31fd15a_18)"},"SYR":{"name":"Syrian Arab Republic","region":"EMRO","iso3code":"SYR","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/syr.jpg?sfvrsn=eb334d41_18)"},"TJK":{"name":"Tajikistan","region":"EURO","iso3code":"TJK","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/tjk.jpg?sfvrsn=356fb42a_17)"},"THA":{"name":"Thailand","region":"SEARO","iso3code":"THA","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/tha.jpg?sfvrsn=cb3c4159_18)"},"TLS":{"name":"Timor-Leste","region":"SEARO","iso3code":"TLS","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/tls.jpg?sfvrsn=cafbb485_15)"},"TGO":{"name":"Togo","region":"AFRO","iso3code":"TGO","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/tgo.jpg?sfvrsn=f01fafa1_18)"},"TKL":{"name":"Tokelau","region":"WPRO","iso3code":"TKL"},"TON":{"name":"Tonga","region":"WPRO","iso3code":"TON","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/ton.jpg?sfvrsn=ff7e7515_18)"},"TTO":{"name":"Trinidad and Tobago","region":"AMRO","iso3code":"TTO","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/tto.jpg?sfvrsn=be36a2e1_18)"},"TUN":{"name":"Tunisia","region":"EMRO","iso3code":"TUN","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/tun.jpg?sfvrsn=7befe225_18)"},"TUR":{"name":"Türkiye","region":"EURO","iso3code":"TUR","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/tur.jpg?sfvrsn=73bb31c3_18)"},"TKM":{"name":"Turkmenistan","region":"EURO","iso3code":"TKM","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/tkm.jpg?sfvrsn=21106e16_18)"},"TUV":{"name":"Tuvalu","region":"WPRO","iso3code":"TUV","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/tuv.jpg?sfvrsn=6b596017_18)"},"UGA":{"name":"Uganda","region":"AFRO","iso3code":"UGA","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/uga.jpg?sfvrsn=fd3102e5_18)"},"UKR":{"name":"Ukraine","region":"EURO","iso3code":"UKR","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/ukr.jpg?sfvrsn=a0670681_18)"},"ARE":{"name":"United Arab Emirates","region":"EMRO","iso3code":"ARE","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/are.jpg?sfvrsn=2aaa5f81_18)"},"TZA":{"name":"United Republic of Tanzania","region":"AFRO","iso3code":"TZA","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/tza.jpg?sfvrsn=2a09db5d_18)"},"URY":{"name":"Uruguay","region":"AMRO","iso3code":"URY","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/ury.jpg?sfvrsn=d5e720dd_18)"},"UZB":{"name":"Uzbekistan","region":"EURO","iso3code":"UZB","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/uzb.jpg?sfvrsn=faaa222_17)"},"VUT":{"name":"Vanuatu","region":"WPRO","iso3code":"VUT","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/vut.jpg?sfvrsn=b007d98d_18)"},"VEN":{"name":"Venezuela (Bolivarian Republic of)","region":"AMRO","iso3code":"VEN","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/ven.jpg?sfvrsn=682c8d81_18)"},"VNM":{"name":"Viet Nam","region":"WPRO","iso3code":"VNM","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/vnm.jpg?sfvrsn=6f5a7f59_18)"},"YEM":{"name":"Yemen","region":"EMRO","iso3code":"YEM","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/yem.jpg?sfvrsn=eee298a6_18)"},"ZMB":{"name":"Zambia","region":"AFRO","iso3code":"ZMB","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/zmb.jpg?sfvrsn=8b21a287_18)"},"ZWE":{"name":"Zimbabwe","region":"AFRO","iso3code":"ZWE","flag":"background-image: url(https://cdn-auth-cms.who.int/media-aut/images/default-source/countries-overview/flags/zwe.jpg?sfvrsn=38d9b0eb_18)"}}`);


var urlBase = () => {
    currentURL = window.location.href
    var index = currentURL.indexOf("/who-results-report-2022-2023");
    return currentURL.substring(0, index + "/who-results-report-2022-2023/".length);
}
var countryURL = country => urlBase() + "/country-profile/" + country;

$(function () {

    jQuery("#regionFilter").change((e) => {
        countryProfileFilter["region"] = jQuery(e.target).val();
        filterCountryProfiles();
    });

    jQuery("#countryFilter").keyup((e) => {
        countryProfileFilter["name"] = jQuery(e.target).val().toLowerCase();
        filterCountryProfiles();
    });

    filterCountryProfiles();

});

function filterCountryProfiles() {

    let filteredList = Object.values(countryProfileList).filter(item => (
        item.name.toLowerCase().includes(countryProfileFilter.name) && (countryProfileFilter.region == '' || countryProfileFilter.region == item.region)
    ));

    const $ul = $('#countrySelector');
    $ul.empty();
    $ul.removeClass('countries-empty')
    if (filteredList.length > 0) {
        if ((countryProfileFilter.region == '') && (countryProfileFilter.name == '')) {
            $ul.addClass('countries-empty')
            /*$ul.append(`<li>Search for country in textbox</li>`);*/
        } else {
            $.each(filteredList.slice(0, 47), function (i, countryProfile) {
                $ul.append(`
                    <a href='${countryURL(countryProfile.iso3code)}'>
                        <div class="flag" style="${countryProfile.flag}"></div>
                        <div>
                            <div class="country-name">${countryProfile.name}</div>
                            <span class="region-name">${countryProfile.region}</span>
                        </div>
                    </a>
                `);
            });
        }
    } else {
        $ul.addClass('countries-empty')
        $ul.append(`<li>No results found</li>`);
    }

}