import React, { useState } from 'react';
import { Lesson, DomainType } from '../types/map';
import { FRANCE_CITIES } from '../data/franceMapData';
import { BookOpen, Plus, Sparkles, MapPin, CheckCircle, ArrowRight, Trash2, Target } from 'lucide-react';
import { LessonReader } from './LessonReader';
import { analyzeLessonLocally } from '../services/offlineContent';
import parisLesson1Data from '../data/paris_lesson_1.json';
import parisLesson2Data from '../data/paris_lesson_2.json';
import parisLesson3Data from '../data/paris_lesson_3.json';
import parisLesson4Data from '../data/paris_lesson_4.json';
import parisLesson5Data from '../data/paris_lesson_5.json';
import parisLesson6Data from '../data/paris_lesson_6.json';
import parisLesson7Data from '../data/paris_lesson_7.json';
import parisLesson8Data from '../data/paris_lesson_8.json';
import parisLesson9Data from '../data/paris_lesson_9.json';
import parisLesson10Data from '../data/paris_lesson_10.json';
import parisLesson11Data from '../data/paris_lesson_11.json';
import parisLesson12Data from '../data/paris_lesson_12.json';
import parisLesson13Data from '../data/paris_lesson_13.json';
import parisLesson14Data from '../data/paris_lesson_14.json';
import parisLesson15Data from '../data/paris_lesson_15.json';
import parisLesson16Data from '../data/paris_lesson_16.json';
import parisLesson17Data from '../data/paris_lesson_17.json';
import parisLesson18Data from '../data/paris_lesson_18.json';
import parisLesson19Data from '../data/paris_lesson_19.json';
import parisLesson20Data from '../data/paris_lesson_20.json';
import parisLesson21Data from '../data/paris_lesson_21.json';
import parisLesson22Data from '../data/paris_lesson_22.json';
import parisLesson23Data from '../data/paris_lesson_23.json';
import parisLesson24Data from '../data/paris_lesson_24.json';
import parisLesson25Data from '../data/paris_lesson_25.json';
import parisLesson26Data from '../data/paris_lesson_26.json';
import parisLesson27Data from '../data/paris_lesson_27.json';
import parisLesson28Data from '../data/paris_lesson_28.json';
import parisLesson29Data from '../data/paris_lesson_29.json';
import parisLesson30Data from '../data/paris_lesson_30.json';
import parisLesson31Data from '../data/paris_lesson_31.json';
import parisLesson32Data from '../data/paris_lesson_32.json';
import parisLesson33Data from '../data/paris_lesson_33.json';
import parisLesson34Data from '../data/paris_lesson_34.json';
import parisLesson35Data from '../data/paris_lesson_35.json';
import parisLesson36Data from '../data/paris_lesson_36.json';
import parisLesson37Data from '../data/paris_lesson_37.json';
import parisLesson38Data from '../data/paris_lesson_38.json';
import parisLesson39Data from '../data/paris_lesson_39.json';
import parisLesson40Data from '../data/paris_lesson_40.json';
import parisLesson41Data from '../data/paris_lesson_41.json';
import parisLesson42Data from '../data/paris_lesson_42.json';
import parisLesson43Data from '../data/paris_lesson_43.json';
import parisLesson44Data from '../data/paris_lesson_44.json';
import parisLesson45Data from '../data/paris_lesson_45.json';
import parisLesson46Data from '../data/paris_lesson_46.json';
import parisLesson47Data from '../data/paris_lesson_47.json';
import parisLesson48Data from '../data/paris_lesson_48.json';
import parisLesson49Data from '../data/paris_lesson_49.json';
import parisLesson50Data from '../data/paris_lesson_50.json';
import parisLesson51Data from '../data/paris_lesson_51.json';
import amiensLesson1Data from '../data/amiens_lesson_1.json';
import lilleLesson1Data from '../data/lille_lesson_1.json';
import montSaintMichelLesson1Data from '../data/mont_saint_michel_lesson_1.json';
import toursLesson1Data from '../data/tours_lesson_1.json';
import bordeauxLesson1Data from '../data/bordeaux_lesson_1.json';
import toulouseLesson1Data from '../data/toulouse_lesson_1.json';
import lyonLesson1Data from '../data/lyon_lesson_1.json';
import marseilleLesson1Data from '../data/marseille_lesson_1.json';
import strasbourgLesson1Data from '../data/strasbourg_lesson_1.json';
import niceLesson1Data from '../data/nice_lesson_1.json';
import amiensLesson2Data from '../data/amiens_lesson_2.json';
import lilleLesson2Data from '../data/lille_lesson_2.json';
import montSaintMichelLesson2Data from '../data/mont_saint_michel_lesson_2.json';
import toursLesson2Data from '../data/tours_lesson_2.json';
import bordeauxLesson2Data from '../data/bordeaux_lesson_2.json';
import toulouseLesson2Data from '../data/toulouse_lesson_2.json';
import lyonLesson2Data from '../data/lyon_lesson_2.json';
import marseilleLesson2Data from '../data/marseille_lesson_2.json';
import strasbourgLesson2Data from '../data/strasbourg_lesson_2.json';
import niceLesson2Data from '../data/nice_lesson_2.json';
import amiensLesson3Data from '../data/amiens_lesson_3.json';
import lilleLesson3Data from '../data/lille_lesson_3.json';
import montSaintMichelLesson3Data from '../data/mont_saint_michel_lesson_3.json';
import toursLesson3Data from '../data/tours_lesson_3.json';
import bordeauxLesson3Data from '../data/bordeaux_lesson_3.json';
import toulouseLesson3Data from '../data/toulouse_lesson_3.json';
import lyonLesson3Data from '../data/lyon_lesson_3.json';
import marseilleLesson3Data from '../data/marseille_lesson_3.json';
import strasbourgLesson3Data from '../data/strasbourg_lesson_3.json';
import niceLesson3Data from '../data/nice_lesson_3.json';
import amiensLesson4Data from '../data/amiens_lesson_4.json';
import amiensLesson5Data from '../data/amiens_lesson_5.json';
import amiensLesson6Data from '../data/amiens_lesson_6.json';
import amiensLesson7Data from '../data/amiens_lesson_7.json';
import amiensLesson8Data from '../data/amiens_lesson_8.json';
import amiensLesson9Data from '../data/amiens_lesson_9.json';
import amiensLesson10Data from '../data/amiens_lesson_10.json';
import amiensLesson11Data from '../data/amiens_lesson_11.json';
import amiensLesson12Data from '../data/amiens_lesson_12.json';
import amiensLesson13Data from '../data/amiens_lesson_13.json';
import amiensLesson14Data from '../data/amiens_lesson_14.json';
import amiensLesson15Data from '../data/amiens_lesson_15.json';
import amiensLesson16Data from '../data/amiens_lesson_16.json';
import amiensLesson17Data from '../data/amiens_lesson_17.json';
import amiensLesson18Data from '../data/amiens_lesson_18.json';
import amiensLesson19Data from '../data/amiens_lesson_19.json';
import amiensLesson20Data from '../data/amiens_lesson_20.json';
import amiensLesson21Data from '../data/amiens_lesson_21.json';
import amiensLesson22Data from '../data/amiens_lesson_22.json';
import amiensLesson23Data from '../data/amiens_lesson_23.json';
import amiensLesson24Data from '../data/amiens_lesson_24.json';
import amiensLesson25Data from '../data/amiens_lesson_25.json';
import lilleLesson4Data from '../data/lille_lesson_4.json';
import lilleLesson5Data from '../data/lille_lesson_5.json';
import lilleLesson6Data from '../data/lille_lesson_6.json';
import lilleLesson7Data from '../data/lille_lesson_7.json';
import lilleLesson8Data from '../data/lille_lesson_8.json';
import lilleLesson9Data from '../data/lille_lesson_9.json';
import lilleLesson10Data from '../data/lille_lesson_10.json';
import lilleLesson11Data from '../data/lille_lesson_11.json';
import lilleLesson12Data from '../data/lille_lesson_12.json';
import lilleLesson13Data from '../data/lille_lesson_13.json';
import lilleLesson14Data from '../data/lille_lesson_14.json';
import lilleLesson15Data from '../data/lille_lesson_15.json';
import lilleLesson16Data from '../data/lille_lesson_16.json';
import lilleLesson17Data from '../data/lille_lesson_17.json';
import lilleLesson18Data from '../data/lille_lesson_18.json';
import lilleLesson19Data from '../data/lille_lesson_19.json';
import lilleLesson20Data from '../data/lille_lesson_20.json';
import lilleLesson21Data from '../data/lille_lesson_21.json';
import lilleLesson22Data from '../data/lille_lesson_22.json';
import lilleLesson23Data from '../data/lille_lesson_23.json';
import lilleLesson24Data from '../data/lille_lesson_24.json';
import lilleLesson25Data from '../data/lille_lesson_25.json';
import montSaintMichelLesson4Data from '../data/mont_saint_michel_lesson_4.json';
import montSaintMichelLesson5Data from '../data/mont_saint_michel_lesson_5.json';
import montSaintMichelLesson6Data from '../data/mont_saint_michel_lesson_6.json';
import montSaintMichelLesson7Data from '../data/mont_saint_michel_lesson_7.json';
import montSaintMichelLesson8Data from '../data/mont_saint_michel_lesson_8.json';
import montSaintMichelLesson9Data from '../data/mont_saint_michel_lesson_9.json';
import montSaintMichelLesson10Data from '../data/mont_saint_michel_lesson_10.json';
import montSaintMichelLesson11Data from '../data/mont_saint_michel_lesson_11.json';
import montSaintMichelLesson12Data from '../data/mont_saint_michel_lesson_12.json';
import montSaintMichelLesson13Data from '../data/mont_saint_michel_lesson_13.json';
import montSaintMichelLesson14Data from '../data/mont_saint_michel_lesson_14.json';
import montSaintMichelLesson15Data from '../data/mont_saint_michel_lesson_15.json';
import montSaintMichelLesson16Data from '../data/mont_saint_michel_lesson_16.json';
import montSaintMichelLesson17Data from '../data/mont_saint_michel_lesson_17.json';
import montSaintMichelLesson18Data from '../data/mont_saint_michel_lesson_18.json';
import montSaintMichelLesson19Data from '../data/mont_saint_michel_lesson_19.json';
import montSaintMichelLesson20Data from '../data/mont_saint_michel_lesson_20.json';
import montSaintMichelLesson21Data from '../data/mont_saint_michel_lesson_21.json';
import montSaintMichelLesson22Data from '../data/mont_saint_michel_lesson_22.json';
import montSaintMichelLesson23Data from '../data/mont_saint_michel_lesson_23.json';
import montSaintMichelLesson24Data from '../data/mont_saint_michel_lesson_24.json';
import montSaintMichelLesson25Data from '../data/mont_saint_michel_lesson_25.json';
import montSaintMichelLesson26Data from '../data/mont_saint_michel_lesson_26.json';
import montSaintMichelLesson27Data from '../data/mont_saint_michel_lesson_27.json';
import montSaintMichelLesson28Data from '../data/mont_saint_michel_lesson_28.json';
import montSaintMichelLesson29Data from '../data/mont_saint_michel_lesson_29.json';
import montSaintMichelLesson30Data from '../data/mont_saint_michel_lesson_30.json';
import montSaintMichelLesson31Data from '../data/mont_saint_michel_lesson_31.json';
import montSaintMichelLesson32Data from '../data/mont_saint_michel_lesson_32.json';
import montSaintMichelLesson33Data from '../data/mont_saint_michel_lesson_33.json';
import montSaintMichelLesson34Data from '../data/mont_saint_michel_lesson_34.json';
import montSaintMichelLesson35Data from '../data/mont_saint_michel_lesson_35.json';
import montSaintMichelLesson36Data from '../data/mont_saint_michel_lesson_36.json';
import montSaintMichelLesson37Data from '../data/mont_saint_michel_lesson_37.json';
import montSaintMichelLesson38Data from '../data/mont_saint_michel_lesson_38.json';
import montSaintMichelLesson39Data from '../data/mont_saint_michel_lesson_39.json';
import montSaintMichelLesson40Data from '../data/mont_saint_michel_lesson_40.json';
import montSaintMichelLesson41Data from '../data/mont_saint_michel_lesson_41.json';
import montSaintMichelLesson42Data from '../data/mont_saint_michel_lesson_42.json';
import montSaintMichelLesson43Data from '../data/mont_saint_michel_lesson_43.json';
import montSaintMichelLesson44Data from '../data/mont_saint_michel_lesson_44.json';
import montSaintMichelLesson45Data from '../data/mont_saint_michel_lesson_45.json';
import montSaintMichelLesson46Data from '../data/mont_saint_michel_lesson_46.json';
import montSaintMichelLesson47Data from '../data/mont_saint_michel_lesson_47.json';
import toursLesson4Data from '../data/tours_lesson_4.json';
import toursLesson5Data from '../data/tours_lesson_5.json';
import toursLesson6Data from '../data/tours_lesson_6.json';
import toursLesson7Data from '../data/tours_lesson_7.json';
import toursLesson8Data from '../data/tours_lesson_8.json';
import toursLesson9Data from '../data/tours_lesson_9.json';
import toursLesson10Data from '../data/tours_lesson_10.json';
import toursLesson11Data from '../data/tours_lesson_11.json';
import toursLesson12Data from '../data/tours_lesson_12.json';
import toursLesson13Data from '../data/tours_lesson_13.json';
import toursLesson14Data from '../data/tours_lesson_14.json';
import toursLesson15Data from '../data/tours_lesson_15.json';
import toursLesson16Data from '../data/tours_lesson_16.json';
import toursLesson17Data from '../data/tours_lesson_17.json';
import toursLesson18Data from '../data/tours_lesson_18.json';
import toursLesson19Data from '../data/tours_lesson_19.json';
import toursLesson20Data from '../data/tours_lesson_20.json';
import toursLesson21Data from '../data/tours_lesson_21.json';
import toursLesson22Data from '../data/tours_lesson_22.json';
import toursLesson23Data from '../data/tours_lesson_23.json';
import toursLesson24Data from '../data/tours_lesson_24.json';
import toursLesson25Data from '../data/tours_lesson_25.json';
import toursLesson26Data from '../data/tours_lesson_26.json';
import toursLesson27Data from '../data/tours_lesson_27.json';
import toursLesson28Data from '../data/tours_lesson_28.json';
import toursLesson29Data from '../data/tours_lesson_29.json';
import toursLesson30Data from '../data/tours_lesson_30.json';
import toursLesson31Data from '../data/tours_lesson_31.json';
import toursLesson32Data from '../data/tours_lesson_32.json';
import toursLesson33Data from '../data/tours_lesson_33.json';
import toursLesson34Data from '../data/tours_lesson_34.json';
import toursLesson35Data from '../data/tours_lesson_35.json';
import toursLesson36Data from '../data/tours_lesson_36.json';
import toursLesson37Data from '../data/tours_lesson_37.json';
import toursLesson38Data from '../data/tours_lesson_38.json';
import toursLesson39Data from '../data/tours_lesson_39.json';
import toursLesson40Data from '../data/tours_lesson_40.json';
import toursLesson41Data from '../data/tours_lesson_41.json';
import toursLesson42Data from '../data/tours_lesson_42.json';
import toursLesson43Data from '../data/tours_lesson_43.json';
import toursLesson44Data from '../data/tours_lesson_44.json';
import toursLesson45Data from '../data/tours_lesson_45.json';
import toursLesson46Data from '../data/tours_lesson_46.json';
import toursLesson47Data from '../data/tours_lesson_47.json';
import bordeauxLesson4Data from '../data/bordeaux_lesson_4.json';
import bordeauxLesson5Data from '../data/bordeaux_lesson_5.json';
import bordeauxLesson6Data from '../data/bordeaux_lesson_6.json';
import bordeauxLesson7Data from '../data/bordeaux_lesson_7.json';
import bordeauxLesson8Data from '../data/bordeaux_lesson_8.json';
import bordeauxLesson9Data from '../data/bordeaux_lesson_9.json';
import bordeauxLesson10Data from '../data/bordeaux_lesson_10.json';
import bordeauxLesson11Data from '../data/bordeaux_lesson_11.json';
import bordeauxLesson12Data from '../data/bordeaux_lesson_12.json';
import bordeauxLesson13Data from '../data/bordeaux_lesson_13.json';
import bordeauxLesson14Data from '../data/bordeaux_lesson_14.json';
import bordeauxLesson15Data from '../data/bordeaux_lesson_15.json';
import bordeauxLesson16Data from '../data/bordeaux_lesson_16.json';
import bordeauxLesson17Data from '../data/bordeaux_lesson_17.json';
import bordeauxLesson18Data from '../data/bordeaux_lesson_18.json';
import bordeauxLesson19Data from '../data/bordeaux_lesson_19.json';
import bordeauxLesson20Data from '../data/bordeaux_lesson_20.json';
import bordeauxLesson21Data from '../data/bordeaux_lesson_21.json';
import bordeauxLesson22Data from '../data/bordeaux_lesson_22.json';
import bordeauxLesson23Data from '../data/bordeaux_lesson_23.json';
import bordeauxLesson24Data from '../data/bordeaux_lesson_24.json';
import bordeauxLesson25Data from '../data/bordeaux_lesson_25.json';
import bordeauxLesson26Data from '../data/bordeaux_lesson_26.json';
import bordeauxLesson27Data from '../data/bordeaux_lesson_27.json';
import bordeauxLesson28Data from '../data/bordeaux_lesson_28.json';
import bordeauxLesson29Data from '../data/bordeaux_lesson_29.json';
import bordeauxLesson30Data from '../data/bordeaux_lesson_30.json';
import bordeauxLesson31Data from '../data/bordeaux_lesson_31.json';
import bordeauxLesson32Data from '../data/bordeaux_lesson_32.json';
import bordeauxLesson33Data from '../data/bordeaux_lesson_33.json';
import bordeauxLesson34Data from '../data/bordeaux_lesson_34.json';
import bordeauxLesson35Data from '../data/bordeaux_lesson_35.json';
import bordeauxLesson36Data from '../data/bordeaux_lesson_36.json';
import bordeauxLesson37Data from '../data/bordeaux_lesson_37.json';
import bordeauxLesson38Data from '../data/bordeaux_lesson_38.json';
import bordeauxLesson39Data from '../data/bordeaux_lesson_39.json';
import bordeauxLesson40Data from '../data/bordeaux_lesson_40.json';
import bordeauxLesson41Data from '../data/bordeaux_lesson_41.json';
import bordeauxLesson42Data from '../data/bordeaux_lesson_42.json';
import bordeauxLesson43Data from '../data/bordeaux_lesson_43.json';
import bordeauxLesson44Data from '../data/bordeaux_lesson_44.json';
import bordeauxLesson45Data from '../data/bordeaux_lesson_45.json';
import bordeauxLesson46Data from '../data/bordeaux_lesson_46.json';
import bordeauxLesson47Data from '../data/bordeaux_lesson_47.json';
import toulouseLesson4Data from '../data/toulouse_lesson_4.json';
import toulouseLesson5Data from '../data/toulouse_lesson_5.json';
import toulouseLesson6Data from '../data/toulouse_lesson_6.json';
import toulouseLesson7Data from '../data/toulouse_lesson_7.json';
import toulouseLesson8Data from '../data/toulouse_lesson_8.json';
import toulouseLesson9Data from '../data/toulouse_lesson_9.json';
import toulouseLesson10Data from '../data/toulouse_lesson_10.json';
import toulouseLesson11Data from '../data/toulouse_lesson_11.json';
import toulouseLesson12Data from '../data/toulouse_lesson_12.json';
import toulouseLesson13Data from '../data/toulouse_lesson_13.json';
import toulouseLesson14Data from '../data/toulouse_lesson_14.json';
import toulouseLesson15Data from '../data/toulouse_lesson_15.json';
import toulouseLesson16Data from '../data/toulouse_lesson_16.json';
import toulouseLesson17Data from '../data/toulouse_lesson_17.json';
import toulouseLesson18Data from '../data/toulouse_lesson_18.json';
import toulouseLesson19Data from '../data/toulouse_lesson_19.json';
import toulouseLesson20Data from '../data/toulouse_lesson_20.json';
import toulouseLesson21Data from '../data/toulouse_lesson_21.json';
import toulouseLesson22Data from '../data/toulouse_lesson_22.json';
import toulouseLesson23Data from '../data/toulouse_lesson_23.json';
import toulouseLesson24Data from '../data/toulouse_lesson_24.json';
import toulouseLesson25Data from '../data/toulouse_lesson_25.json';
import toulouseLesson26Data from '../data/toulouse_lesson_26.json';
import toulouseLesson27Data from '../data/toulouse_lesson_27.json';
import toulouseLesson28Data from '../data/toulouse_lesson_28.json';
import toulouseLesson29Data from '../data/toulouse_lesson_29.json';
import toulouseLesson30Data from '../data/toulouse_lesson_30.json';
import toulouseLesson31Data from '../data/toulouse_lesson_31.json';
import toulouseLesson32Data from '../data/toulouse_lesson_32.json';
import toulouseLesson33Data from '../data/toulouse_lesson_33.json';
import toulouseLesson34Data from '../data/toulouse_lesson_34.json';
import toulouseLesson35Data from '../data/toulouse_lesson_35.json';
import toulouseLesson36Data from '../data/toulouse_lesson_36.json';
import toulouseLesson37Data from '../data/toulouse_lesson_37.json';
import toulouseLesson38Data from '../data/toulouse_lesson_38.json';
import toulouseLesson39Data from '../data/toulouse_lesson_39.json';
import toulouseLesson40Data from '../data/toulouse_lesson_40.json';
import toulouseLesson41Data from '../data/toulouse_lesson_41.json';
import toulouseLesson42Data from '../data/toulouse_lesson_42.json';
import toulouseLesson43Data from '../data/toulouse_lesson_43.json';
import toulouseLesson44Data from '../data/toulouse_lesson_44.json';
import toulouseLesson45Data from '../data/toulouse_lesson_45.json';
import toulouseLesson46Data from '../data/toulouse_lesson_46.json';
import toulouseLesson47Data from '../data/toulouse_lesson_47.json';
import toulouseLesson48Data from '../data/toulouse_lesson_48.json';
import toulouseLesson49Data from '../data/toulouse_lesson_49.json';
import toulouseLesson50Data from '../data/toulouse_lesson_50.json';
import toulouseLesson51Data from '../data/toulouse_lesson_51.json';
import toulouseLesson52Data from '../data/toulouse_lesson_52.json';
import toulouseLesson53Data from '../data/toulouse_lesson_53.json';
import toulouseLesson54Data from '../data/toulouse_lesson_54.json';
import toulouseLesson55Data from '../data/toulouse_lesson_55.json';
import toulouseLesson56Data from '../data/toulouse_lesson_56.json';
import lyonLesson4Data from '../data/lyon_lesson_4.json';
import lyonLesson5Data from '../data/lyon_lesson_5.json';
import lyonLesson6Data from '../data/lyon_lesson_6.json';
import lyonLesson7Data from '../data/lyon_lesson_7.json';
import lyonLesson8Data from '../data/lyon_lesson_8.json';
import lyonLesson9Data from '../data/lyon_lesson_9.json';
import lyonLesson10Data from '../data/lyon_lesson_10.json';
import lyonLesson11Data from '../data/lyon_lesson_11.json';
import lyonLesson12Data from '../data/lyon_lesson_12.json';
import lyonLesson13Data from '../data/lyon_lesson_13.json';
import lyonLesson14Data from '../data/lyon_lesson_14.json';
import lyonLesson15Data from '../data/lyon_lesson_15.json';
import lyonLesson16Data from '../data/lyon_lesson_16.json';
import lyonLesson17Data from '../data/lyon_lesson_17.json';
import lyonLesson18Data from '../data/lyon_lesson_18.json';
import lyonLesson19Data from '../data/lyon_lesson_19.json';
import lyonLesson20Data from '../data/lyon_lesson_20.json';
import lyonLesson21Data from '../data/lyon_lesson_21.json';
import lyonLesson22Data from '../data/lyon_lesson_22.json';
import lyonLesson23Data from '../data/lyon_lesson_23.json';
import lyonLesson24Data from '../data/lyon_lesson_24.json';
import lyonLesson25Data from '../data/lyon_lesson_25.json';
import lyonLesson26Data from '../data/lyon_lesson_26.json';
import lyonLesson27Data from '../data/lyon_lesson_27.json';
import lyonLesson28Data from '../data/lyon_lesson_28.json';
import lyonLesson29Data from '../data/lyon_lesson_29.json';
import lyonLesson30Data from '../data/lyon_lesson_30.json';
import lyonLesson31Data from '../data/lyon_lesson_31.json';
import lyonLesson32Data from '../data/lyon_lesson_32.json';
import lyonLesson33Data from '../data/lyon_lesson_33.json';
import lyonLesson34Data from '../data/lyon_lesson_34.json';
import lyonLesson35Data from '../data/lyon_lesson_35.json';
import lyonLesson36Data from '../data/lyon_lesson_36.json';
import lyonLesson37Data from '../data/lyon_lesson_37.json';
import lyonLesson38Data from '../data/lyon_lesson_38.json';
import lyonLesson39Data from '../data/lyon_lesson_39.json';
import lyonLesson40Data from '../data/lyon_lesson_40.json';
import lyonLesson41Data from '../data/lyon_lesson_41.json';
import lyonLesson42Data from '../data/lyon_lesson_42.json';
import lyonLesson43Data from '../data/lyon_lesson_43.json';
import lyonLesson44Data from '../data/lyon_lesson_44.json';
import lyonLesson45Data from '../data/lyon_lesson_45.json';
import lyonLesson46Data from '../data/lyon_lesson_46.json';
import lyonLesson47Data from '../data/lyon_lesson_47.json';
import lyonLesson48Data from '../data/lyon_lesson_48.json';
import lyonLesson49Data from '../data/lyon_lesson_49.json';
import lyonLesson50Data from '../data/lyon_lesson_50.json';
import lyonLesson51Data from '../data/lyon_lesson_51.json';
import lyonLesson52Data from '../data/lyon_lesson_52.json';
import lyonLesson53Data from '../data/lyon_lesson_53.json';
import lyonLesson54Data from '../data/lyon_lesson_54.json';
import lyonLesson55Data from '../data/lyon_lesson_55.json';
import lyonLesson56Data from '../data/lyon_lesson_56.json';
import marseilleLesson4Data from '../data/marseille_lesson_4.json';
import marseilleLesson5Data from '../data/marseille_lesson_5.json';
import marseilleLesson6Data from '../data/marseille_lesson_6.json';
import marseilleLesson7Data from '../data/marseille_lesson_7.json';
import marseilleLesson8Data from '../data/marseille_lesson_8.json';
import marseilleLesson9Data from '../data/marseille_lesson_9.json';
import marseilleLesson10Data from '../data/marseille_lesson_10.json';
import marseilleLesson11Data from '../data/marseille_lesson_11.json';
import marseilleLesson12Data from '../data/marseille_lesson_12.json';
import marseilleLesson13Data from '../data/marseille_lesson_13.json';
import marseilleLesson14Data from '../data/marseille_lesson_14.json';
import marseilleLesson15Data from '../data/marseille_lesson_15.json';
import marseilleLesson16Data from '../data/marseille_lesson_16.json';
import marseilleLesson17Data from '../data/marseille_lesson_17.json';
import marseilleLesson18Data from '../data/marseille_lesson_18.json';
import marseilleLesson19Data from '../data/marseille_lesson_19.json';
import marseilleLesson20Data from '../data/marseille_lesson_20.json';
import marseilleLesson21Data from '../data/marseille_lesson_21.json';
import marseilleLesson22Data from '../data/marseille_lesson_22.json';
import marseilleLesson23Data from '../data/marseille_lesson_23.json';
import marseilleLesson24Data from '../data/marseille_lesson_24.json';
import marseilleLesson25Data from '../data/marseille_lesson_25.json';
import marseilleLesson26Data from '../data/marseille_lesson_26.json';
import marseilleLesson27Data from '../data/marseille_lesson_27.json';
import marseilleLesson28Data from '../data/marseille_lesson_28.json';
import marseilleLesson29Data from '../data/marseille_lesson_29.json';
import marseilleLesson30Data from '../data/marseille_lesson_30.json';
import marseilleLesson31Data from '../data/marseille_lesson_31.json';
import marseilleLesson32Data from '../data/marseille_lesson_32.json';
import marseilleLesson33Data from '../data/marseille_lesson_33.json';
import marseilleLesson34Data from '../data/marseille_lesson_34.json';
import marseilleLesson35Data from '../data/marseille_lesson_35.json';
import marseilleLesson36Data from '../data/marseille_lesson_36.json';
import marseilleLesson37Data from '../data/marseille_lesson_37.json';
import marseilleLesson38Data from '../data/marseille_lesson_38.json';
import marseilleLesson39Data from '../data/marseille_lesson_39.json';
import marseilleLesson40Data from '../data/marseille_lesson_40.json';
import marseilleLesson41Data from '../data/marseille_lesson_41.json';
import marseilleLesson42Data from '../data/marseille_lesson_42.json';
import marseilleLesson43Data from '../data/marseille_lesson_43.json';
import marseilleLesson44Data from '../data/marseille_lesson_44.json';
import marseilleLesson45Data from '../data/marseille_lesson_45.json';
import marseilleLesson46Data from '../data/marseille_lesson_46.json';
import marseilleLesson47Data from '../data/marseille_lesson_47.json';
import marseilleLesson48Data from '../data/marseille_lesson_48.json';
import marseilleLesson49Data from '../data/marseille_lesson_49.json';
import marseilleLesson50Data from '../data/marseille_lesson_50.json';
import marseilleLesson51Data from '../data/marseille_lesson_51.json';
import marseilleLesson52Data from '../data/marseille_lesson_52.json';
import marseilleLesson53Data from '../data/marseille_lesson_53.json';
import marseilleLesson54Data from '../data/marseille_lesson_54.json';
import marseilleLesson55Data from '../data/marseille_lesson_55.json';
import marseilleLesson56Data from '../data/marseille_lesson_56.json';
import marseilleLesson57Data from '../data/marseille_lesson_57.json';
import marseilleLesson58Data from '../data/marseille_lesson_58.json';
import marseilleLesson59Data from '../data/marseille_lesson_59.json';
import marseilleLesson60Data from '../data/marseille_lesson_60.json';
import marseilleLesson61Data from '../data/marseille_lesson_61.json';
import marseilleLesson62Data from '../data/marseille_lesson_62.json';
import marseilleLesson63Data from '../data/marseille_lesson_63.json';
import marseilleLesson64Data from '../data/marseille_lesson_64.json';
import marseilleLesson65Data from '../data/marseille_lesson_65.json';
import marseilleLesson66Data from '../data/marseille_lesson_66.json';
import marseilleLesson67Data from '../data/marseille_lesson_67.json';
import marseilleLesson68Data from '../data/marseille_lesson_68.json';
import marseilleLesson69Data from '../data/marseille_lesson_69.json';
import marseilleLesson70Data from '../data/marseille_lesson_70.json';
import marseilleLesson71Data from '../data/marseille_lesson_71.json';
import marseilleLesson72Data from '../data/marseille_lesson_72.json';
import marseilleLesson73Data from '../data/marseille_lesson_73.json';
import marseilleLesson74Data from '../data/marseille_lesson_74.json';
import marseilleLesson75Data from '../data/marseille_lesson_75.json';
import strasbourgLesson4Data from '../data/strasbourg_lesson_4.json';
import strasbourgLesson5Data from '../data/strasbourg_lesson_5.json';
import strasbourgLesson6Data from '../data/strasbourg_lesson_6.json';
import strasbourgLesson7Data from '../data/strasbourg_lesson_7.json';
import strasbourgLesson8Data from '../data/strasbourg_lesson_8.json';
import strasbourgLesson9Data from '../data/strasbourg_lesson_9.json';
import strasbourgLesson11Data from '../data/strasbourg_lesson_11.json';
import strasbourgLesson12Data from '../data/strasbourg_lesson_12.json';
import strasbourgLesson13Data from '../data/strasbourg_lesson_13.json';
import strasbourgLesson14Data from '../data/strasbourg_lesson_14.json';
import strasbourgLesson15Data from '../data/strasbourg_lesson_15.json';
import strasbourgLesson16Data from '../data/strasbourg_lesson_16.json';
import strasbourgLesson17Data from '../data/strasbourg_lesson_17.json';
import strasbourgLesson18Data from '../data/strasbourg_lesson_18.json';
import strasbourgLesson19Data from '../data/strasbourg_lesson_19.json';
import strasbourgLesson20Data from '../data/strasbourg_lesson_20.json';
import strasbourgLesson21Data from '../data/strasbourg_lesson_21.json';
import niceLesson4Data from '../data/nice_lesson_4.json';
import niceLesson5Data from '../data/nice_lesson_5.json';
import niceLesson6Data from '../data/nice_lesson_6.json';
import niceLesson7Data from '../data/nice_lesson_7.json';
import niceLesson8Data from '../data/nice_lesson_8.json';
import niceLesson9Data from '../data/nice_lesson_9.json';
import niceLesson10Data from '../data/nice_lesson_10.json';
import niceLesson11Data from '../data/nice_lesson_11.json';
import niceLesson12Data from '../data/nice_lesson_12.json';
import niceLesson13Data from '../data/nice_lesson_13.json';
import niceLesson14Data from '../data/nice_lesson_14.json';
import niceLesson15Data from '../data/nice_lesson_15.json';
import niceLesson16Data from '../data/nice_lesson_16.json';

const PARIS_OFFICIAL_LESSONS = [
  parisLesson1Data,
  parisLesson2Data,
  parisLesson3Data,
  parisLesson4Data,
  parisLesson5Data,
  parisLesson6Data,
  parisLesson7Data,
  parisLesson8Data,
  parisLesson9Data,
  parisLesson10Data,
  parisLesson11Data,
  parisLesson12Data,
  parisLesson13Data,
  parisLesson14Data,
  parisLesson15Data,
  parisLesson16Data,
  parisLesson17Data,
  parisLesson18Data,
  parisLesson19Data,
  parisLesson20Data,
  parisLesson21Data,
  parisLesson22Data,
  parisLesson23Data,  parisLesson24Data,
  parisLesson25Data,
  parisLesson26Data,
  parisLesson27Data,
  parisLesson28Data,
  parisLesson29Data,
  parisLesson30Data,
  parisLesson31Data,
  parisLesson32Data,
  parisLesson33Data,
  parisLesson34Data,
  parisLesson35Data,
  parisLesson36Data,
  parisLesson37Data,
  parisLesson38Data,
  parisLesson39Data,
  parisLesson40Data,
  parisLesson41Data,
  parisLesson42Data,
  parisLesson43Data,
  parisLesson44Data,
  parisLesson45Data,
  parisLesson46Data,
  parisLesson47Data,
  parisLesson48Data,
  parisLesson49Data,
  parisLesson50Data,
  parisLesson51Data,
];
const AMIENS_OFFICIAL_LESSONS = [
  amiensLesson1Data,
  amiensLesson2Data,
  amiensLesson3Data,
  amiensLesson4Data,
  amiensLesson5Data,
  amiensLesson6Data,
  amiensLesson7Data,
  amiensLesson8Data,
  amiensLesson9Data,
  amiensLesson10Data,
  amiensLesson11Data,
  amiensLesson12Data,
  amiensLesson13Data,
  amiensLesson14Data,
  amiensLesson15Data,
  amiensLesson16Data,
  amiensLesson17Data,
  amiensLesson18Data,
  amiensLesson19Data,
  amiensLesson20Data,
  amiensLesson21Data,
  amiensLesson22Data,
  amiensLesson23Data,
  amiensLesson24Data,
  amiensLesson25Data,
];

const LILLE_OFFICIAL_LESSONS = [
  lilleLesson1Data,
  lilleLesson2Data,
  lilleLesson3Data,
  lilleLesson4Data,
  lilleLesson5Data,
  lilleLesson6Data,
  lilleLesson7Data,
  lilleLesson8Data,
  lilleLesson9Data,
  lilleLesson10Data,
  lilleLesson11Data,
  lilleLesson12Data,
  lilleLesson13Data,
  lilleLesson14Data,
  lilleLesson15Data,
  lilleLesson16Data,
  lilleLesson17Data,
  lilleLesson18Data,
  lilleLesson19Data,
  lilleLesson20Data,
  lilleLesson21Data,
  lilleLesson22Data,
  lilleLesson23Data,
  lilleLesson24Data,
  lilleLesson25Data,
];
const MONT_SAINT_MICHEL_OFFICIAL_LESSONS = [
  montSaintMichelLesson1Data,
  montSaintMichelLesson2Data,
  montSaintMichelLesson3Data,
  montSaintMichelLesson4Data,
  montSaintMichelLesson5Data,
  montSaintMichelLesson6Data,
  montSaintMichelLesson7Data,
  montSaintMichelLesson8Data,
  montSaintMichelLesson9Data,
  montSaintMichelLesson10Data,
  montSaintMichelLesson11Data,
  montSaintMichelLesson12Data,
  montSaintMichelLesson13Data,
  montSaintMichelLesson14Data,
  montSaintMichelLesson15Data,
  montSaintMichelLesson16Data,
  montSaintMichelLesson17Data,
  montSaintMichelLesson18Data,
  montSaintMichelLesson19Data,
  montSaintMichelLesson20Data,
  montSaintMichelLesson21Data,
  montSaintMichelLesson22Data,
  montSaintMichelLesson23Data,
  montSaintMichelLesson24Data,
  montSaintMichelLesson25Data,
  montSaintMichelLesson26Data,
  montSaintMichelLesson27Data,
  montSaintMichelLesson28Data,
  montSaintMichelLesson29Data,
  montSaintMichelLesson30Data,
  montSaintMichelLesson31Data,
  montSaintMichelLesson32Data,
  montSaintMichelLesson33Data,
  montSaintMichelLesson34Data,
  montSaintMichelLesson35Data,
  montSaintMichelLesson36Data,
  montSaintMichelLesson37Data,
  montSaintMichelLesson38Data,
  montSaintMichelLesson39Data,
  montSaintMichelLesson40Data,
  montSaintMichelLesson41Data,
  montSaintMichelLesson42Data,
  montSaintMichelLesson43Data,
  montSaintMichelLesson44Data,
  montSaintMichelLesson45Data,
  montSaintMichelLesson46Data,
  montSaintMichelLesson47Data,
];
const TOURS_OFFICIAL_LESSONS = [
  toursLesson1Data,
  toursLesson2Data,
  toursLesson3Data,
  toursLesson4Data,
  toursLesson5Data,
  toursLesson6Data,
  toursLesson7Data,
  toursLesson8Data,
  toursLesson9Data,
  toursLesson10Data,
  toursLesson11Data,
  toursLesson12Data,
  toursLesson13Data,
  toursLesson14Data,
  toursLesson15Data,
  toursLesson16Data,
  toursLesson17Data,
  toursLesson18Data,
  toursLesson19Data,
  toursLesson20Data,
  toursLesson21Data,
  toursLesson22Data,
  toursLesson23Data,
  toursLesson24Data,
  toursLesson25Data,
  toursLesson26Data,
  toursLesson27Data,
  toursLesson28Data,
  toursLesson29Data,
  toursLesson30Data,
  toursLesson31Data,
  toursLesson32Data,
  toursLesson33Data,
  toursLesson34Data,
  toursLesson35Data,
  toursLesson36Data,
  toursLesson37Data,
  toursLesson38Data,
  toursLesson39Data,
  toursLesson40Data,
  toursLesson41Data,
  toursLesson42Data,
  toursLesson43Data,
  toursLesson44Data,
  toursLesson45Data,
  toursLesson46Data,
  toursLesson47Data,
];
const BORDEAUX_OFFICIAL_LESSONS = [
  bordeauxLesson1Data,
  bordeauxLesson2Data,
  bordeauxLesson3Data,
  bordeauxLesson4Data,
  bordeauxLesson5Data,
  bordeauxLesson6Data,
  bordeauxLesson7Data,
  bordeauxLesson8Data,
  bordeauxLesson9Data,
  bordeauxLesson10Data,
  bordeauxLesson11Data,
  bordeauxLesson12Data,
  bordeauxLesson13Data,
  bordeauxLesson14Data,
  bordeauxLesson15Data,
  bordeauxLesson16Data,
  bordeauxLesson17Data,
  bordeauxLesson18Data,
  bordeauxLesson19Data,
  bordeauxLesson20Data,
  bordeauxLesson21Data,
  bordeauxLesson22Data,
  bordeauxLesson23Data,
  bordeauxLesson24Data,
  bordeauxLesson25Data,
  bordeauxLesson26Data,
  bordeauxLesson27Data,
  bordeauxLesson28Data,
  bordeauxLesson29Data,
  bordeauxLesson30Data,
  bordeauxLesson31Data,
  bordeauxLesson32Data,
  bordeauxLesson33Data,
  bordeauxLesson34Data,
  bordeauxLesson35Data,
  bordeauxLesson36Data,
  bordeauxLesson37Data,
  bordeauxLesson38Data,
  bordeauxLesson39Data,
  bordeauxLesson40Data,
  bordeauxLesson41Data,
  bordeauxLesson42Data,
  bordeauxLesson43Data,
  bordeauxLesson44Data,
  bordeauxLesson45Data,
  bordeauxLesson46Data,
  bordeauxLesson47Data,
];
const TOULOUSE_OFFICIAL_LESSONS = [
  toulouseLesson1Data,
  toulouseLesson2Data,
  toulouseLesson3Data,
  toulouseLesson4Data,
  toulouseLesson5Data,
  toulouseLesson6Data,
  toulouseLesson7Data,
  toulouseLesson8Data,
  toulouseLesson9Data,
  toulouseLesson10Data,
  toulouseLesson11Data,
  toulouseLesson12Data,
  toulouseLesson13Data,
  toulouseLesson14Data,
  toulouseLesson15Data,
  toulouseLesson16Data,
  toulouseLesson17Data,
  toulouseLesson18Data,
  toulouseLesson19Data,
  toulouseLesson20Data,
  toulouseLesson21Data,
  toulouseLesson22Data,
  toulouseLesson23Data,
  toulouseLesson24Data,
  toulouseLesson25Data,
  toulouseLesson26Data,
  toulouseLesson27Data,
  toulouseLesson28Data,
  toulouseLesson29Data,
  toulouseLesson30Data,
  toulouseLesson31Data,
  toulouseLesson32Data,
  toulouseLesson33Data,
  toulouseLesson34Data,
  toulouseLesson35Data,
  toulouseLesson36Data,
  toulouseLesson37Data,
  toulouseLesson38Data,
  toulouseLesson39Data,
  toulouseLesson40Data,
  toulouseLesson41Data,
  toulouseLesson42Data,
  toulouseLesson43Data,
  toulouseLesson44Data,
  toulouseLesson45Data,
  toulouseLesson46Data,
  toulouseLesson47Data,
  toulouseLesson48Data,
  toulouseLesson49Data,
  toulouseLesson50Data,
  toulouseLesson51Data,
  toulouseLesson52Data,
  toulouseLesson53Data,
  toulouseLesson54Data,
  toulouseLesson55Data,
  toulouseLesson56Data,
];
const LYON_OFFICIAL_LESSONS = [
  lyonLesson1Data,
  lyonLesson2Data,
  lyonLesson3Data,
  lyonLesson4Data,
  lyonLesson5Data,
  lyonLesson6Data,
  lyonLesson7Data,
  lyonLesson8Data,
  lyonLesson9Data,
  lyonLesson10Data,
  lyonLesson11Data,
  lyonLesson12Data,
  lyonLesson13Data,
  lyonLesson14Data,
  lyonLesson15Data,
  lyonLesson16Data,
  lyonLesson17Data,
  lyonLesson18Data,
  lyonLesson19Data,
  lyonLesson20Data,
  lyonLesson21Data,
  lyonLesson22Data,
  lyonLesson23Data,
  lyonLesson24Data,
  lyonLesson25Data,
  lyonLesson26Data,
  lyonLesson27Data,
  lyonLesson28Data,
  lyonLesson29Data,
  lyonLesson30Data,
  lyonLesson31Data,
  lyonLesson32Data,
  lyonLesson33Data,
  lyonLesson34Data,
  lyonLesson35Data,
  lyonLesson36Data,
  lyonLesson37Data,
  lyonLesson38Data,
  lyonLesson39Data,
  lyonLesson40Data,
  lyonLesson41Data,
  lyonLesson42Data,
  lyonLesson43Data,
  lyonLesson44Data,
  lyonLesson45Data,
  lyonLesson46Data,
  lyonLesson47Data,
  lyonLesson48Data,
  lyonLesson49Data,
  lyonLesson50Data,
  lyonLesson51Data,
  lyonLesson52Data,
  lyonLesson53Data,
  lyonLesson54Data,
  lyonLesson55Data,
  lyonLesson56Data,
];
const MARSEILLE_OFFICIAL_LESSONS = [
  marseilleLesson1Data,
  marseilleLesson2Data,
  marseilleLesson3Data,
  marseilleLesson4Data,
  marseilleLesson5Data,
  marseilleLesson6Data,
  marseilleLesson7Data,
  marseilleLesson8Data,
  marseilleLesson9Data,
  marseilleLesson10Data,
  marseilleLesson11Data,
  marseilleLesson12Data,
  marseilleLesson13Data,
  marseilleLesson14Data,
  marseilleLesson15Data,
  marseilleLesson16Data,
  marseilleLesson17Data,
  marseilleLesson18Data,
  marseilleLesson19Data,
  marseilleLesson20Data,
  marseilleLesson21Data,
  marseilleLesson22Data,
  marseilleLesson23Data,
  marseilleLesson24Data,
  marseilleLesson25Data,
  marseilleLesson26Data,
  marseilleLesson27Data,
  marseilleLesson28Data,
  marseilleLesson29Data,
  marseilleLesson30Data,
  marseilleLesson31Data,
  marseilleLesson32Data,
  marseilleLesson33Data,
  marseilleLesson34Data,
  marseilleLesson35Data,
  marseilleLesson36Data,
  marseilleLesson37Data,
  marseilleLesson38Data,
  marseilleLesson39Data,
  marseilleLesson40Data,
  marseilleLesson41Data,
  marseilleLesson42Data,
  marseilleLesson43Data,
  marseilleLesson44Data,
  marseilleLesson45Data,
  marseilleLesson46Data,
  marseilleLesson47Data,
  marseilleLesson48Data,
  marseilleLesson49Data,
  marseilleLesson50Data,
  marseilleLesson51Data,
  marseilleLesson52Data,
  marseilleLesson53Data,
  marseilleLesson54Data,
  marseilleLesson55Data,
  marseilleLesson56Data,
  marseilleLesson57Data,
  marseilleLesson58Data,
  marseilleLesson59Data,
  marseilleLesson60Data,
  marseilleLesson61Data,
  marseilleLesson62Data,
  marseilleLesson63Data,
  marseilleLesson64Data,
  marseilleLesson65Data,
  marseilleLesson66Data,
  marseilleLesson67Data,
  marseilleLesson68Data,
  marseilleLesson69Data,
  marseilleLesson70Data,
  marseilleLesson71Data,
  marseilleLesson72Data,
  marseilleLesson73Data,
  marseilleLesson74Data,
  marseilleLesson75Data,
];
const STRASBOURG_OFFICIAL_LESSONS = [
  strasbourgLesson1Data,
  strasbourgLesson2Data,
  strasbourgLesson3Data,
  strasbourgLesson4Data,
  strasbourgLesson5Data,
  strasbourgLesson6Data,
  strasbourgLesson7Data,
  strasbourgLesson8Data,
  strasbourgLesson9Data,
  strasbourgLesson11Data,
  strasbourgLesson12Data,
  strasbourgLesson13Data,
  strasbourgLesson14Data,
  strasbourgLesson15Data,
  strasbourgLesson16Data,
  strasbourgLesson17Data,
  strasbourgLesson18Data,
  strasbourgLesson19Data,
  strasbourgLesson20Data,
  strasbourgLesson21Data,
];
const NICE_OFFICIAL_LESSONS = [
  niceLesson1Data,
  niceLesson2Data,
  niceLesson3Data,
  niceLesson4Data,
  niceLesson5Data,
  niceLesson6Data,
  niceLesson7Data,
  niceLesson8Data,
  niceLesson9Data,
  niceLesson10Data,
  niceLesson11Data,
  niceLesson12Data,
  niceLesson13Data,
  niceLesson14Data,
  niceLesson15Data,
  niceLesson16Data,
];

const ALL_OFFICIAL_LESSONS = [
  ...PARIS_OFFICIAL_LESSONS,
  ...AMIENS_OFFICIAL_LESSONS,
  ...LILLE_OFFICIAL_LESSONS,
  ...MONT_SAINT_MICHEL_OFFICIAL_LESSONS,
  ...TOURS_OFFICIAL_LESSONS,
  ...BORDEAUX_OFFICIAL_LESSONS,
  ...TOULOUSE_OFFICIAL_LESSONS,
  ...LYON_OFFICIAL_LESSONS,
  ...MARSEILLE_OFFICIAL_LESSONS,
  ...STRASBOURG_OFFICIAL_LESSONS,
  ...NICE_OFFICIAL_LESSONS,
];

// Data-driven map of the 11-city trail: city id → official lessons.
const CITY_LESSONS: Record<string, any[]> = {
  paris: PARIS_OFFICIAL_LESSONS,
  amiens: AMIENS_OFFICIAL_LESSONS,
  lille: LILLE_OFFICIAL_LESSONS,
  'mont-saint-michel': MONT_SAINT_MICHEL_OFFICIAL_LESSONS,
  tours: TOURS_OFFICIAL_LESSONS,
  bordeaux: BORDEAUX_OFFICIAL_LESSONS,
  toulouse: TOULOUSE_OFFICIAL_LESSONS,
  lyon: LYON_OFFICIAL_LESSONS,
  marseille: MARSEILLE_OFFICIAL_LESSONS,
  strasbourg: STRASBOURG_OFFICIAL_LESSONS,
  nice: NICE_OFFICIAL_LESSONS,
};

// Meta pedagógica da trilha: 15.400 palavras clicáveis ÷ 11 cidades ≈ 1.400
// palavras novas por cidade. A contagem deduplica por term (minúsculas), então
// uma palavra que reaparece em outras aulas conta apenas uma vez.
const CITY_WORD_GOAL = 1400;

function countUniqueCityWords(cityId: string): number {
  const lessons = CITY_LESSONS[cityId] || [];
  const terms = new Set<string>();
  for (const lesson of lessons) {
    const vocab = lesson?.vocabularyDictionary;
    if (!Array.isArray(vocab)) continue;
    for (const entry of vocab) {
      const term = entry?.term;
      if (!term) continue;
      terms.add(String(term).toLowerCase().trim());
    }
  }
  return terms.size;
}

const CITY_TRAIL_INFO: Array<{ id: string; label: string; level: string }> = [
  { id: 'paris', label: '#1 Paris', level: 'A1' },
  { id: 'amiens', label: '#2 Amiens', level: 'A1/A2' },
  { id: 'lille', label: '#3 Lille', level: 'A2' },
  { id: 'mont-saint-michel', label: '#4 Mont St-Michel', level: 'A2/B1' },
  { id: 'tours', label: '#5 Tours', level: 'B1' },
  { id: 'bordeaux', label: '#6 Bordeaux', level: 'B1+' },
  { id: 'toulouse', label: '#7 Toulouse', level: 'B2' },
  { id: 'lyon', label: '#8 Lyon', level: 'B2+' },
  { id: 'marseille', label: '#9 Marselha', level: 'C1' },
  { id: 'strasbourg', label: '#10 Estrasburgo', level: 'C1+' },
  { id: 'nice', label: '#11 Nice', level: 'C2' },
];

interface LessonsViewProps {
  lessons: Lesson[];
  onAddLesson: (lesson: Lesson) => void;
  onNavigateToCity: (cityId: string) => void;
  onNavigateToFlashcards?: () => void;
  initialCityId?: string;
}

export const LessonsView: React.FC<LessonsViewProps> = ({
  lessons,
  onAddLesson,
  onNavigateToCity,
  onNavigateToFlashcards,
  initialCityId,
}) => {
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [domain, setDomain] = useState<DomainType>('Cotidiano');
  const [analyzing, setAnalyzing] = useState<boolean>(false);
  const [activeOfficialLessonId, setActiveOfficialLessonId] = useState<string | null>(null);
  const [selectedCityTab, setSelectedCityTab] = useState<string>(
    initialCityId && CITY_LESSONS[initialCityId] ? initialCityId : 'paris'
  );

  const handleAnalyzeAndSave = async () => {
    if (!title.trim() || !content.trim()) return;
    setAnalyzing(true);

    try {
      const data = analyzeLessonLocally(title, content, domain);

      const newLesson: Lesson = {
        id: 'lesson_' + Date.now(),
        title,
        content,
        countryId: 'FR',
        cityId: data.suggestedCityId || 'paris',
        domain: (data.domain as DomainType) || domain,
        dateAdded: new Date().toISOString(),
        wordsLearned: data.wordsLearned || ['français', 'étude'],
        status: 'mastered',
        accuracyScore: 95
      };

      onAddLesson(newLesson);
      setTitle('');
      setContent('');
      setShowAddModal(false);
    } catch (e) {
      console.error('Failed to analyze lesson', e);
    } finally {
      setAnalyzing(false);
    }
  };

  const activeOfficialLesson = ALL_OFFICIAL_LESSONS.find(
    (l: any) => l.id === activeOfficialLessonId
  );
  const activeCityInfo = CITY_TRAIL_INFO.find((c) => c.id === selectedCityTab) || CITY_TRAIL_INFO[0];
  const activeCityLessons = CITY_LESSONS[selectedCityTab] || [];
  const activeCityWordCount = countUniqueCityWords(selectedCityTab);
  const activeCityWordProgress = Math.min(100, Math.round((activeCityWordCount / CITY_WORD_GOAL) * 100));
  if (activeOfficialLesson) {
    return (
      <LessonReader
        onBack={() => setActiveOfficialLessonId(null)}
        onNavigateToFlashcards={onNavigateToFlashcards}
        lessonData={activeOfficialLesson as any}
      />
    );
  }

  return (
    <div className="flex-1 bg-slate-950 p-6 md:p-8 overflow-y-auto space-y-6 text-slate-200 select-none">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
            Caminho B: Suas Aulas → Mapa da Memória
          </span>
          <h2 className="text-2xl font-black text-white mt-0.5">Minhas Aulas & Conteúdos</h2>
          <p className="text-xs text-slate-400">
            Adicione seus próprios textos ou explore as Aulas Oficiais Interativas com dicionário e SRS!
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center space-x-2 shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Nova Aula / Texto</span>
        </button>
      </div>

      {/* Trilha Oficial - Seletor de Cidades */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
          <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Trilha Francês pela França (11 Cidades) • Selecione a Cidade:</span>
          </h3>
          <span className="text-[10px] font-extrabold text-amber-300 bg-amber-950/80 px-2.5 py-1 rounded-full border border-amber-800/60 uppercase">
            {activeCityInfo.label} • Nível {activeCityInfo.level}
          </span>
        </div>

        {/* Tab Bar Cidades com Regra de Evolução Pedagógica A1 -> C2 */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-800">
          {CITY_TRAIL_INFO.map((city) => {
            const isActive = selectedCityTab === city.id;
            const count = (CITY_LESSONS[city.id] || []).length;
            return (
              <button
                key={city.id}
                onClick={() => setSelectedCityTab(city.id)}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 shrink-0 transition-all ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-950/50 border border-emerald-500'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-emerald-300' : 'bg-slate-600'}`} />
                <span>{city.label} • Nível {city.level} ({count} {count === 1 ? 'Aula' : 'Aulas'} • {countUniqueCityWords(city.id)} palavras)</span>
              </button>
            );
          })}
        </div>

        {/* Meta de Palavras por Cidade */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 bg-slate-900/70 border border-slate-800 rounded-2xl p-4">
          <div className="flex items-center gap-3 shrink-0">
            <span className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-800 flex items-center justify-center shrink-0">
              <Target className="w-5 h-5 text-emerald-400" />
            </span>
            <div>
              <p className="text-xs font-bold text-white">
                Meta {activeCityInfo.label} — Nível {activeCityInfo.level}
              </p>
              <p className="text-[11px] text-slate-400">
                {activeCityWordCount} palavras novas disponíveis nesta cidade (sem repetição)
              </p>
            </div>
          </div>
          <div className="flex-1 min-w-[200px]">
            <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 mb-1.5">
              <span>Progresso rumo às 15.400 palavras da trilha</span>
              <span className="text-emerald-400">{activeCityWordCount} / {CITY_WORD_GOAL}</span>
            </div>
            <div className="h-2.5 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-amber-400 transition-all"
                style={{ width: `${activeCityWordProgress}%` }}
              />
            </div>
          </div>
          <span className="text-sm font-extrabold text-amber-300 shrink-0">
            {activeCityWordProgress}%
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 mt-2">
          {activeCityLessons.map((lesson: any, index: number) => {
            const isFirst = index === 0;
            const isSecond = index === 1;
            const cityTitle = activeCityInfo.label;
            const cityBadge = activeCityInfo.label;

            return (
              <div
                key={lesson.id}
                className={`bg-gradient-to-r ${
                  isFirst
                    ? 'from-emerald-500/15 via-slate-900 to-slate-900 border-2 border-emerald-500/50'
                    : isSecond
                    ? 'from-amber-500/10 via-slate-900 to-slate-900 border border-slate-800 hover:border-slate-700'
                    : 'from-emerald-500/10 via-slate-900 to-slate-900 border border-slate-800 hover:border-slate-700'
                } rounded-3xl p-6 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all`}
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                    <span className="text-[10px] font-extrabold text-amber-400 bg-amber-950 px-2.5 py-0.5 rounded-full border border-amber-800 uppercase tracking-wide">
                      {lesson.domain} • {cityBadge} • Lição {index + 1}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950 px-2.5 py-0.5 rounded-full border border-emerald-800">
                      {lesson.level}
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-white">
                    {lesson.titleFr || lesson.title}
                  </h3>
                  <p className="text-xs text-slate-300 max-w-3xl leading-relaxed">
                    {lesson.subtitlePt || lesson.summaryPt || lesson.subtitleFr || ''}
                  </p>
                </div>

                <button
                  onClick={() => setActiveOfficialLessonId(lesson.id)}
                  className={`px-5 py-3 ${
                    isFirst
                      ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                      : isSecond
                      ? 'bg-amber-500 hover:bg-amber-400 text-slate-950'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                  } font-extrabold text-xs rounded-xl shadow-lg transition-all flex items-center space-x-2 shrink-0`}
                >
                  <BookOpen className="w-4 h-4 text-emerald-400" />
                  <span>Ler Lição {index + 1} ({cityTitle})</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Add Lesson Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-xl bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Analisar e Vincular Nova Aula ao Mapa</span>
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-slate-400 hover:text-white text-xs"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs text-slate-400 font-semibold">Título da Aula:</label>
                <input
                  type="text"
                  placeholder="Ex: La Révolution Française et Paris..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full mt-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="text-xs text-slate-400 font-semibold">Conteúdo / Texto em Francês:</label>
                <textarea
                  rows={5}
                  placeholder="Cole ou escreva o texto estudado..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full mt-1 bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white outline-none focus:border-emerald-500 resize-none"
                />
              </div>

              <div>
                <label className="text-xs text-slate-400 font-semibold">Domínio de Uso:</label>
                <select
                  value={domain}
                  onChange={(e) => setDomain(e.target.value as DomainType)}
                  className="w-full mt-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white outline-none"
                >
                  <option value="Cotidiano">Cotidiano</option>
                  <option value="Cultura">Cultura & História</option>
                  <option value="Acadêmico">Acadêmico</option>
                  <option value="Profissional">Profissional</option>
                </select>
              </div>
            </div>

            <div className="flex items-center justify-end space-x-3 pt-3 border-t border-slate-800">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 text-xs text-slate-400 hover:text-white"
              >
                Cancelar
              </button>
              <button
                onClick={handleAnalyzeAndSave}
                disabled={analyzing}
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center space-x-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>{analyzing ? 'Analisando...' : 'Analisar e Salvar'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* List of Lessons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {lessons.map((lesson) => {
          const linkedCity = FRANCE_CITIES.find((c) => c.id === lesson.cityId);

          return (
            <div
              key={lesson.id}
              className="p-5 bg-slate-900 border border-slate-800 rounded-2xl space-y-3 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded-full border border-emerald-800/60 uppercase">
                    {lesson.domain}
                  </span>
                  <h3 className="text-sm font-bold text-white mt-1.5">{lesson.title}</h3>
                </div>

                {linkedCity && (
                  <button
                    onClick={() => onNavigateToCity(linkedCity.id)}
                    className="flex items-center space-x-1 text-xs text-emerald-400 hover:underline font-medium bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800"
                  >
                    <MapPin className="w-3 h-3" />
                    <span>{linkedCity.name}</span>
                  </button>
                )}
              </div>

              <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed italic">
                "{lesson.content}"
              </p>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <div className="flex flex-wrap gap-1">
                  {lesson.wordsLearned.slice(0, 4).map((w) => (
                    <span
                      key={w}
                      className="text-[10px] bg-slate-950 text-slate-300 px-2 py-0.5 rounded border border-slate-800"
                    >
                      {w}
                    </span>
                  ))}
                </div>

                <span className="text-[10px] text-emerald-400 font-semibold">
                  Dominado (95%)
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
