export const EDITOR_TEXT = `%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%% Template for a SPARC file
%% Author: Sayed Erfan Arefin
%% Description: Music, album etc.
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

sorts
    #people={nickoccbrain, adriansmith, janickgers, steveharris, brucedickinson, davemurray, chrisadler,chris_martin, jonny_buckland, guy_berryman, will_champion }.
    #instrument={drums, guitar, vocals, bass}.
    #album={danceofdeath, thenumberofthebeast, powerslave}.
    #song={aceshigh, twominutestomidnight, powerslavesong, ancientmariner}.
    #band={ironmaiden, lambofgod, thebeatles, coldplay}.
    #genre={rock, metal, alternativerock}.
predicates
    bandmate(#people,#band).
    musician(#people,#instrument).
    albumof(#album,#band).
    songof(#song,#album).
    bandgenre(#band,#genre).
   
rules

    bandmate(nickoccbrain,ironmaiden).
    bandmate(adriansmith,ironmaiden).
    bandmate(janickgers,ironmaiden).
    bandmate(steveharris,ironmaiden).
    bandmate(brucedickinson,ironmaiden).
    bandmate(davemurray,ironmaiden).
    bandmate(chris_martin,coldplay).
    bandmate(jonny_buckland,coldplay).
    bandmate(guy_berryman,coldplay).
    bandmate(will_champion ,coldplay).

    musician(nickoccbrain, drums).
    musician(adriansmith, guitar).
    musician(janickgers, guitar).
    musician(steveharris, bass).
    musician(brucedickinson, vocals).
    musician(davemurray, guitar).
    
    bandgenre(ironmaiden, metal).
    
    albumof(danceofdeath, ironmaiden).
    albumof(powerslave, ironmaiden).
    albumof(thenumberofthebeast, ironmaiden).
    
    songof(aceshigh, powerslave).
    songof(twominutestomidnight, powerslave).
    songof(powerslavesong, powerslave).
    songof(ancientmariner, powerslave).
`;

export const SAMPLE = `
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%% Template for a SPARC file
%% Author: 
%% Description:
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

sorts
    #album = {portals, call_me_if_you_get_lost_the_estate_sale,    the_record,    in_pieces,    not_alone,    grown_man,    thats_not_how_this_works_feat_dan__shay,    say_say_say_feat_paul_mccartney__michael_jackson,    waiting,    gucci_feat_dababy_savage,    fires_dont_start_themselves,    feel_again,    joker_rainbow,    chanel,    psychos,    blue_lights,    im_really_like_that,    yahyuppiyah_feat_pceeeequechley,    softest_touch,    fight_the_feeling}.
    #artist = {melanie_martinez,    tyler_the_creator,    boygenius,    chloe,    q,    marshmello,    polo_g,    southside,    charlie_puth,    dan__shay,    kygo,    lauren_daigle,    gucci_mane,    dababy,    darius_rucker,    armin_van_buuren,    jesse,    becky_g,    peso_pluma,    jenny_lewis,    jayda_g,    dj_drama,    uncle_waffles,    tony_duardo,    justin99,    khalid,    rod_wave,dan_shay}.
predicates
    whoArtist(#album, #artist).
rules
    whoArtist(portals,melanie_martinez).
    whoArtist(call_me_if_you_get_lost_the_estate_sale,tyler_the_creator).
    whoArtist(the_record,boygenius).
    whoArtist(in_pieces,chloe).
    whoArtist(not_alone,q).
    whoArtist(grown_man,marshmello).
    whoArtist(grown_man,polo_g).
    whoArtist(grown_man,southside).
    whoArtist(thats_not_how_this_works_feat_dan__shay,charlie_puth).
    whoArtist(thats_not_how_this_works_feat_dan__shay,dan_shay).
    whoArtist(say_say_say_feat_paul_mccartney__michael_jackson,kygo).
    whoArtist(waiting,lauren_daigle).
    whoArtist(gucci_feat_dababy_savage,gucci_mane).
    whoArtist(gucci_feat_dababy_savage,dababy).
    whoArtist(fires_dont_start_themselves,darius_rucker).
    whoArtist(feel_again,armin_van_buuren).
    whoArtist(joker_rainbow,jesse).
    whoArtist(chanel,becky_g).
    whoArtist(chanel,peso_pluma).
    whoArtist(psychos,jenny_lewis).
    whoArtist(blue_lights,jayda_g).
    whoArtist(im_really_like_that,dj_drama).
    whoArtist(yahyuppiyah_feat_pceeeequechley,uncle_waffles).
    whoArtist(yahyuppiyah_feat_pceeeequechley,tony_duardo).
    whoArtist(yahyuppiyah_feat_pceeeequechley,justin99).
    whoArtist(softest_touch,khalid).
    whoArtist(fight_the_feeling,rod_wave).
`;
