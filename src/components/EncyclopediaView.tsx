import React, { useState } from 'react';
import { UserMapProgress } from '../types/map';
import { FRANCE_CITIES } from '../data/franceMapData';
import { Landmark, Lock, ChevronLeft, BookOpen, ArrowRight, Sparkles, Compass, MapPin } from 'lucide-react';
import { LessonReader } from './LessonReader';
import { isEncyclopediaUnlocked } from '../utils/trailProgression';
import parisGuide01 from '../data/city_guides/paris_guide_01.json';
import parisGuide02 from '../data/city_guides/paris_guide_02.json';
import parisGuide03 from '../data/city_guides/paris_guide_03.json';
import parisGuide04 from '../data/city_guides/paris_guide_04.json';
import parisGuide05 from '../data/city_guides/paris_guide_05.json';
import parisGuide06 from '../data/city_guides/paris_guide_06.json';
import parisGuide07 from '../data/city_guides/paris_guide_07.json';
import parisGuide08 from '../data/city_guides/paris_guide_08.json';
import parisGuide09 from '../data/city_guides/paris_guide_09.json';
import parisGuide10 from '../data/city_guides/paris_guide_10.json';
import parisGuide11 from '../data/city_guides/paris_guide_11.json';
import parisGuide12 from '../data/city_guides/paris_guide_12.json';
import parisGuide13 from '../data/city_guides/paris_guide_13.json';
import parisGuide14 from '../data/city_guides/paris_guide_14.json';
import parisGuide15 from '../data/city_guides/paris_guide_15.json';
import parisGuide16 from '../data/city_guides/paris_guide_16.json';
import parisGuide17 from '../data/city_guides/paris_guide_17.json';
import parisGuide18 from '../data/city_guides/paris_guide_18.json';
import parisGuide19 from '../data/city_guides/paris_guide_19.json';
import parisGuide20 from '../data/city_guides/paris_guide_20.json';
import parisGuide21 from '../data/city_guides/paris_guide_21.json';
import parisGuide22 from '../data/city_guides/paris_guide_22.json';
import parisGuide23 from '../data/city_guides/paris_guide_23.json';
import parisGuide24 from '../data/city_guides/paris_guide_24.json';
import parisGuide25 from '../data/city_guides/paris_guide_25.json';
import parisGuide26 from '../data/city_guides/paris_guide_26.json';
import parisGuide27 from '../data/city_guides/paris_guide_27.json';
import parisGuide28 from '../data/city_guides/paris_guide_28.json';
import parisGuide29 from '../data/city_guides/paris_guide_29.json';
import parisGuide30 from '../data/city_guides/paris_guide_30.json';
import parisGuide31 from '../data/city_guides/paris_guide_31.json';
import parisGuide32 from '../data/city_guides/paris_guide_32.json';
import parisGuide33 from '../data/city_guides/paris_guide_33.json';
import parisGuide34 from '../data/city_guides/paris_guide_34.json';
import parisGuide35 from '../data/city_guides/paris_guide_35.json';
import parisGuide36 from '../data/city_guides/paris_guide_36.json';
import parisGuide37 from '../data/city_guides/paris_guide_37.json';
import parisGuide38 from '../data/city_guides/paris_guide_38.json';
import parisGuide39 from '../data/city_guides/paris_guide_39.json';
import parisGuide40 from '../data/city_guides/paris_guide_40.json';
import parisGuide41 from '../data/city_guides/paris_guide_41.json';
import parisGuide42 from '../data/city_guides/paris_guide_42.json';
import parisGuide43 from '../data/city_guides/paris_guide_43.json';
import parisGuide44 from '../data/city_guides/paris_guide_44.json';
import parisGuide45 from '../data/city_guides/paris_guide_45.json';
import parisGuide46 from '../data/city_guides/paris_guide_46.json';
import parisGuide47 from '../data/city_guides/paris_guide_47.json';
import parisGuide48 from '../data/city_guides/paris_guide_48.json';
import parisGuide49 from '../data/city_guides/paris_guide_49.json';
import parisGuide50 from '../data/city_guides/paris_guide_50.json';
import parisGuide51 from '../data/city_guides/paris_guide_51.json';
import amiensGuide01 from '../data/city_guides/amiens_guide_01.json';
import amiensGuide02 from '../data/city_guides/amiens_guide_02.json';
import amiensGuide03 from '../data/city_guides/amiens_guide_03.json';
import amiensGuide04 from '../data/city_guides/amiens_guide_04.json';
import amiensGuide05 from '../data/city_guides/amiens_guide_05.json';
import amiensGuide06 from '../data/city_guides/amiens_guide_06.json';
import amiensGuide07 from '../data/city_guides/amiens_guide_07.json';
import amiensGuide08 from '../data/city_guides/amiens_guide_08.json';
import amiensGuide09 from '../data/city_guides/amiens_guide_09.json';
import amiensGuide10 from '../data/city_guides/amiens_guide_10.json';
import amiensGuide11 from '../data/city_guides/amiens_guide_11.json';
import amiensGuide12 from '../data/city_guides/amiens_guide_12.json';
import amiensGuide13 from '../data/city_guides/amiens_guide_13.json';
import amiensGuide14 from '../data/city_guides/amiens_guide_14.json';
import amiensGuide15 from '../data/city_guides/amiens_guide_15.json';
import amiensGuide16 from '../data/city_guides/amiens_guide_16.json';
import amiensGuide17 from '../data/city_guides/amiens_guide_17.json';
import amiensGuide18 from '../data/city_guides/amiens_guide_18.json';
import amiensGuide19 from '../data/city_guides/amiens_guide_19.json';
import amiensGuide20 from '../data/city_guides/amiens_guide_20.json';
import amiensGuide21 from '../data/city_guides/amiens_guide_21.json';
import amiensGuide22 from '../data/city_guides/amiens_guide_22.json';
import amiensGuide23 from '../data/city_guides/amiens_guide_23.json';
import amiensGuide24 from '../data/city_guides/amiens_guide_24.json';
import amiensGuide25 from '../data/city_guides/amiens_guide_25.json';
import amiensGuide26 from '../data/city_guides/amiens_guide_26.json';
import amiensGuide27 from '../data/city_guides/amiens_guide_27.json';
import amiensGuide28 from '../data/city_guides/amiens_guide_28.json';
import amiensGuide29 from '../data/city_guides/amiens_guide_29.json';
import amiensGuide30 from '../data/city_guides/amiens_guide_30.json';
import amiensGuide31 from '../data/city_guides/amiens_guide_31.json';
import amiensGuide32 from '../data/city_guides/amiens_guide_32.json';
import amiensGuide33 from '../data/city_guides/amiens_guide_33.json';
import amiensGuide34 from '../data/city_guides/amiens_guide_34.json';
import amiensGuide35 from '../data/city_guides/amiens_guide_35.json';
import amiensGuide36 from '../data/city_guides/amiens_guide_36.json';
import amiensGuide37 from '../data/city_guides/amiens_guide_37.json';
import amiensGuide38 from '../data/city_guides/amiens_guide_38.json';
import amiensGuide39 from '../data/city_guides/amiens_guide_39.json';
import amiensGuide40 from '../data/city_guides/amiens_guide_40.json';
import amiensGuide41 from '../data/city_guides/amiens_guide_41.json';
import amiensGuide42 from '../data/city_guides/amiens_guide_42.json';
import amiensGuide43 from '../data/city_guides/amiens_guide_43.json';
import lilleGuide01 from '../data/city_guides/lille_guide_01.json';
import lilleGuide02 from '../data/city_guides/lille_guide_02.json';
import lilleGuide03 from '../data/city_guides/lille_guide_03.json';
import lilleGuide04 from '../data/city_guides/lille_guide_04.json';
import lilleGuide05 from '../data/city_guides/lille_guide_05.json';
import lilleGuide06 from '../data/city_guides/lille_guide_06.json';
import lilleGuide07 from '../data/city_guides/lille_guide_07.json';
import lilleGuide08 from '../data/city_guides/lille_guide_08.json';
import lilleGuide09 from '../data/city_guides/lille_guide_09.json';
import lilleGuide10 from '../data/city_guides/lille_guide_10.json';
import lilleGuide11 from '../data/city_guides/lille_guide_11.json';
import lilleGuide12 from '../data/city_guides/lille_guide_12.json';
import lilleGuide13 from '../data/city_guides/lille_guide_13.json';
import lilleGuide14 from '../data/city_guides/lille_guide_14.json';
import lilleGuide15 from '../data/city_guides/lille_guide_15.json';
import lilleGuide16 from '../data/city_guides/lille_guide_16.json';
import lilleGuide17 from '../data/city_guides/lille_guide_17.json';
import lilleGuide18 from '../data/city_guides/lille_guide_18.json';
import lilleGuide19 from '../data/city_guides/lille_guide_19.json';
import lilleGuide20 from '../data/city_guides/lille_guide_20.json';
import lilleGuide21 from '../data/city_guides/lille_guide_21.json';
import lilleGuide22 from '../data/city_guides/lille_guide_22.json';
import lilleGuide23 from '../data/city_guides/lille_guide_23.json';
import lilleGuide24 from '../data/city_guides/lille_guide_24.json';
import lilleGuide25 from '../data/city_guides/lille_guide_25.json';
import lilleGuide26 from '../data/city_guides/lille_guide_26.json';
import lilleGuide27 from '../data/city_guides/lille_guide_27.json';
import lilleGuide28 from '../data/city_guides/lille_guide_28.json';
import lilleGuide29 from '../data/city_guides/lille_guide_29.json';
import lilleGuide30 from '../data/city_guides/lille_guide_30.json';
import lilleGuide31 from '../data/city_guides/lille_guide_31.json';
import lilleGuide32 from '../data/city_guides/lille_guide_32.json';
import lilleGuide33 from '../data/city_guides/lille_guide_33.json';
import lilleGuide34 from '../data/city_guides/lille_guide_34.json';
import lilleGuide35 from '../data/city_guides/lille_guide_35.json';
import lilleGuide36 from '../data/city_guides/lille_guide_36.json';
import lilleGuide37 from '../data/city_guides/lille_guide_37.json';
import lilleGuide38 from '../data/city_guides/lille_guide_38.json';
import lilleGuide39 from '../data/city_guides/lille_guide_39.json';
import lilleGuide40 from '../data/city_guides/lille_guide_40.json';
import lilleGuide41 from '../data/city_guides/lille_guide_41.json';
import msmGuide01 from '../data/city_guides/mont_saint_michel_guide_01.json';
import msmGuide02 from '../data/city_guides/mont_saint_michel_guide_02.json';
import msmGuide03 from '../data/city_guides/mont_saint_michel_guide_03.json';
import msmGuide04 from '../data/city_guides/mont_saint_michel_guide_04.json';
import msmGuide05 from '../data/city_guides/mont_saint_michel_guide_05.json';
import msmGuide06 from '../data/city_guides/mont_saint_michel_guide_06.json';
import msmGuide07 from '../data/city_guides/mont_saint_michel_guide_07.json';
import msmGuide08 from '../data/city_guides/mont_saint_michel_guide_08.json';
import msmGuide09 from '../data/city_guides/mont_saint_michel_guide_09.json';
import msmGuide10 from '../data/city_guides/mont_saint_michel_guide_10.json';
import msmGuide11 from '../data/city_guides/mont_saint_michel_guide_11.json';
import msmGuide12 from '../data/city_guides/mont_saint_michel_guide_12.json';
import msmGuide13 from '../data/city_guides/mont_saint_michel_guide_13.json';
import msmGuide14 from '../data/city_guides/mont_saint_michel_guide_14.json';
import msmGuide15 from '../data/city_guides/mont_saint_michel_guide_15.json';
import msmGuide16 from '../data/city_guides/mont_saint_michel_guide_16.json';
import msmGuide17 from '../data/city_guides/mont_saint_michel_guide_17.json';
import msmGuide18 from '../data/city_guides/mont_saint_michel_guide_18.json';
import msmGuide19 from '../data/city_guides/mont_saint_michel_guide_19.json';
import msmGuide20 from '../data/city_guides/mont_saint_michel_guide_20.json';
import msmGuide21 from '../data/city_guides/mont_saint_michel_guide_21.json';
import msmGuide22 from '../data/city_guides/mont_saint_michel_guide_22.json';
import msmGuide23 from '../data/city_guides/mont_saint_michel_guide_23.json';
import msmGuide24 from '../data/city_guides/mont_saint_michel_guide_24.json';
import msmGuide25 from '../data/city_guides/mont_saint_michel_guide_25.json';
import msmGuide26 from '../data/city_guides/mont_saint_michel_guide_26.json';
import msmGuide27 from '../data/city_guides/mont_saint_michel_guide_27.json';
import msmGuide28 from '../data/city_guides/mont_saint_michel_guide_28.json';
import msmGuide29 from '../data/city_guides/mont_saint_michel_guide_29.json';
import msmGuide30 from '../data/city_guides/mont_saint_michel_guide_30.json';
import msmGuide31 from '../data/city_guides/mont_saint_michel_guide_31.json';
import msmGuide32 from '../data/city_guides/mont_saint_michel_guide_32.json';
import msmGuide33 from '../data/city_guides/mont_saint_michel_guide_33.json';
import msmGuide34 from '../data/city_guides/mont_saint_michel_guide_34.json';
import msmGuide35 from '../data/city_guides/mont_saint_michel_guide_35.json';
import msmGuide36 from '../data/city_guides/mont_saint_michel_guide_36.json';
import msmGuide37 from '../data/city_guides/mont_saint_michel_guide_37.json';
import msmGuide38 from '../data/city_guides/mont_saint_michel_guide_38.json';
import msmGuide39 from '../data/city_guides/mont_saint_michel_guide_39.json';
import msmGuide40 from '../data/city_guides/mont_saint_michel_guide_40.json';
import toursGuide01 from '../data/city_guides/tours_guide_01.json';
import toursGuide02 from '../data/city_guides/tours_guide_02.json';
import toursGuide03 from '../data/city_guides/tours_guide_03.json';
import toursGuide04 from '../data/city_guides/tours_guide_04.json';
import toursGuide05 from '../data/city_guides/tours_guide_05.json';
import toursGuide06 from '../data/city_guides/tours_guide_06.json';
import toursGuide07 from '../data/city_guides/tours_guide_07.json';
import toursGuide08 from '../data/city_guides/tours_guide_08.json';
import toursGuide09 from '../data/city_guides/tours_guide_09.json';
import toursGuide10 from '../data/city_guides/tours_guide_10.json';
import toursGuide11 from '../data/city_guides/tours_guide_11.json';
import toursGuide12 from '../data/city_guides/tours_guide_12.json';
import toursGuide13 from '../data/city_guides/tours_guide_13.json';
import toursGuide14 from '../data/city_guides/tours_guide_14.json';
import toursGuide15 from '../data/city_guides/tours_guide_15.json';
import toursGuide16 from '../data/city_guides/tours_guide_16.json';
import toursGuide17 from '../data/city_guides/tours_guide_17.json';
import toursGuide18 from '../data/city_guides/tours_guide_18.json';
import toursGuide19 from '../data/city_guides/tours_guide_19.json';
import toursGuide20 from '../data/city_guides/tours_guide_20.json';
import toursGuide21 from '../data/city_guides/tours_guide_21.json';
import toursGuide22 from '../data/city_guides/tours_guide_22.json';
import toursGuide23 from '../data/city_guides/tours_guide_23.json';
import toursGuide24 from '../data/city_guides/tours_guide_24.json';
import toursGuide25 from '../data/city_guides/tours_guide_25.json';
import toursGuide26 from '../data/city_guides/tours_guide_26.json';
import toursGuide27 from '../data/city_guides/tours_guide_27.json';
import toursGuide28 from '../data/city_guides/tours_guide_28.json';
import toursGuide29 from '../data/city_guides/tours_guide_29.json';
import toursGuide30 from '../data/city_guides/tours_guide_30.json';
import toursGuide31 from '../data/city_guides/tours_guide_31.json';
import toursGuide32 from '../data/city_guides/tours_guide_32.json';
import toursGuide33 from '../data/city_guides/tours_guide_33.json';
import toursGuide34 from '../data/city_guides/tours_guide_34.json';
import toursGuide35 from '../data/city_guides/tours_guide_35.json';
import toursGuide36 from '../data/city_guides/tours_guide_36.json';
import toursGuide37 from '../data/city_guides/tours_guide_37.json';
import toursGuide38 from '../data/city_guides/tours_guide_38.json';
import toursGuide39 from '../data/city_guides/tours_guide_39.json';
import bordeauxGuide01 from '../data/city_guides/bordeaux_guide_01.json';
import bordeauxGuide02 from '../data/city_guides/bordeaux_guide_02.json';
import bordeauxGuide03 from '../data/city_guides/bordeaux_guide_03.json';
import bordeauxGuide04 from '../data/city_guides/bordeaux_guide_04.json';
import bordeauxGuide05 from '../data/city_guides/bordeaux_guide_05.json';
import bordeauxGuide06 from '../data/city_guides/bordeaux_guide_06.json';
import bordeauxGuide07 from '../data/city_guides/bordeaux_guide_07.json';
import bordeauxGuide08 from '../data/city_guides/bordeaux_guide_08.json';
import bordeauxGuide09 from '../data/city_guides/bordeaux_guide_09.json';
import bordeauxGuide10 from '../data/city_guides/bordeaux_guide_10.json';
import bordeauxGuide11 from '../data/city_guides/bordeaux_guide_11.json';
import bordeauxGuide12 from '../data/city_guides/bordeaux_guide_12.json';
import bordeauxGuide13 from '../data/city_guides/bordeaux_guide_13.json';
import bordeauxGuide14 from '../data/city_guides/bordeaux_guide_14.json';
import bordeauxGuide15 from '../data/city_guides/bordeaux_guide_15.json';
import bordeauxGuide16 from '../data/city_guides/bordeaux_guide_16.json';
import bordeauxGuide17 from '../data/city_guides/bordeaux_guide_17.json';
import bordeauxGuide18 from '../data/city_guides/bordeaux_guide_18.json';
import bordeauxGuide19 from '../data/city_guides/bordeaux_guide_19.json';
import bordeauxGuide20 from '../data/city_guides/bordeaux_guide_20.json';
import bordeauxGuide21 from '../data/city_guides/bordeaux_guide_21.json';
import bordeauxGuide22 from '../data/city_guides/bordeaux_guide_22.json';
import bordeauxGuide23 from '../data/city_guides/bordeaux_guide_23.json';
import bordeauxGuide24 from '../data/city_guides/bordeaux_guide_24.json';
import bordeauxGuide25 from '../data/city_guides/bordeaux_guide_25.json';
import bordeauxGuide26 from '../data/city_guides/bordeaux_guide_26.json';
import bordeauxGuide27 from '../data/city_guides/bordeaux_guide_27.json';
import bordeauxGuide28 from '../data/city_guides/bordeaux_guide_28.json';
import bordeauxGuide29 from '../data/city_guides/bordeaux_guide_29.json';
import bordeauxGuide30 from '../data/city_guides/bordeaux_guide_30.json';
import bordeauxGuide31 from '../data/city_guides/bordeaux_guide_31.json';
import bordeauxGuide32 from '../data/city_guides/bordeaux_guide_32.json';
import bordeauxGuide33 from '../data/city_guides/bordeaux_guide_33.json';
import bordeauxGuide34 from '../data/city_guides/bordeaux_guide_34.json';
import bordeauxGuide35 from '../data/city_guides/bordeaux_guide_35.json';
import bordeauxGuide36 from '../data/city_guides/bordeaux_guide_36.json';
import bordeauxGuide37 from '../data/city_guides/bordeaux_guide_37.json';
import bordeauxGuide38 from '../data/city_guides/bordeaux_guide_38.json';
import bordeauxGuide39 from '../data/city_guides/bordeaux_guide_39.json';
import bordeauxGuide40 from '../data/city_guides/bordeaux_guide_40.json';
import bordeauxGuide41 from '../data/city_guides/bordeaux_guide_41.json';
import bordeauxGuide42 from '../data/city_guides/bordeaux_guide_42.json';
import bordeauxGuide43 from '../data/city_guides/bordeaux_guide_43.json';
import bordeauxGuide44 from '../data/city_guides/bordeaux_guide_44.json';
import toulouseGuide01 from '../data/city_guides/toulouse_guide_01.json';
import toulouseGuide02 from '../data/city_guides/toulouse_guide_02.json';
import toulouseGuide03 from '../data/city_guides/toulouse_guide_03.json';
import toulouseGuide04 from '../data/city_guides/toulouse_guide_04.json';
import toulouseGuide05 from '../data/city_guides/toulouse_guide_05.json';
import toulouseGuide06 from '../data/city_guides/toulouse_guide_06.json';
import toulouseGuide07 from '../data/city_guides/toulouse_guide_07.json';
import toulouseGuide08 from '../data/city_guides/toulouse_guide_08.json';
import toulouseGuide09 from '../data/city_guides/toulouse_guide_09.json';
import toulouseGuide10 from '../data/city_guides/toulouse_guide_10.json';
import toulouseGuide11 from '../data/city_guides/toulouse_guide_11.json';
import toulouseGuide12 from '../data/city_guides/toulouse_guide_12.json';
import toulouseGuide13 from '../data/city_guides/toulouse_guide_13.json';
import toulouseGuide14 from '../data/city_guides/toulouse_guide_14.json';
import toulouseGuide15 from '../data/city_guides/toulouse_guide_15.json';
import toulouseGuide16 from '../data/city_guides/toulouse_guide_16.json';
import toulouseGuide17 from '../data/city_guides/toulouse_guide_17.json';
import toulouseGuide18 from '../data/city_guides/toulouse_guide_18.json';
import toulouseGuide19 from '../data/city_guides/toulouse_guide_19.json';
import toulouseGuide20 from '../data/city_guides/toulouse_guide_20.json';
import toulouseGuide21 from '../data/city_guides/toulouse_guide_21.json';
import toulouseGuide22 from '../data/city_guides/toulouse_guide_22.json';
import toulouseGuide23 from '../data/city_guides/toulouse_guide_23.json';
import toulouseGuide24 from '../data/city_guides/toulouse_guide_24.json';
import toulouseGuide25 from '../data/city_guides/toulouse_guide_25.json';
import toulouseGuide26 from '../data/city_guides/toulouse_guide_26.json';
import toulouseGuide27 from '../data/city_guides/toulouse_guide_27.json';
import toulouseGuide28 from '../data/city_guides/toulouse_guide_28.json';
import toulouseGuide29 from '../data/city_guides/toulouse_guide_29.json';
import toulouseGuide30 from '../data/city_guides/toulouse_guide_30.json';
import toulouseGuide31 from '../data/city_guides/toulouse_guide_31.json';
import toulouseGuide32 from '../data/city_guides/toulouse_guide_32.json';
import toulouseGuide33 from '../data/city_guides/toulouse_guide_33.json';
import toulouseGuide34 from '../data/city_guides/toulouse_guide_34.json';
import toulouseGuide35 from '../data/city_guides/toulouse_guide_35.json';
import toulouseGuide36 from '../data/city_guides/toulouse_guide_36.json';
import toulouseGuide37 from '../data/city_guides/toulouse_guide_37.json';
import toulouseGuide38 from '../data/city_guides/toulouse_guide_38.json';
import toulouseGuide39 from '../data/city_guides/toulouse_guide_39.json';
import toulouseGuide40 from '../data/city_guides/toulouse_guide_40.json';
import toulouseGuide41 from '../data/city_guides/toulouse_guide_41.json';
import toulouseGuide42 from '../data/city_guides/toulouse_guide_42.json';
import toulouseGuide43 from '../data/city_guides/toulouse_guide_43.json';
import toulouseGuide44 from '../data/city_guides/toulouse_guide_44.json';
import lyonGuide01 from '../data/city_guides/lyon_guide_01.json';
import lyonGuide02 from '../data/city_guides/lyon_guide_02.json';
import lyonGuide03 from '../data/city_guides/lyon_guide_03.json';
import lyonGuide04 from '../data/city_guides/lyon_guide_04.json';
import lyonGuide05 from '../data/city_guides/lyon_guide_05.json';
import lyonGuide06 from '../data/city_guides/lyon_guide_06.json';
import lyonGuide07 from '../data/city_guides/lyon_guide_07.json';
import lyonGuide08 from '../data/city_guides/lyon_guide_08.json';
import lyonGuide09 from '../data/city_guides/lyon_guide_09.json';
import lyonGuide10 from '../data/city_guides/lyon_guide_10.json';
import lyonGuide11 from '../data/city_guides/lyon_guide_11.json';
import lyonGuide12 from '../data/city_guides/lyon_guide_12.json';
import lyonGuide13 from '../data/city_guides/lyon_guide_13.json';
import lyonGuide14 from '../data/city_guides/lyon_guide_14.json';
import lyonGuide15 from '../data/city_guides/lyon_guide_15.json';
import lyonGuide16 from '../data/city_guides/lyon_guide_16.json';
import lyonGuide17 from '../data/city_guides/lyon_guide_17.json';
import lyonGuide18 from '../data/city_guides/lyon_guide_18.json';
import lyonGuide19 from '../data/city_guides/lyon_guide_19.json';
import lyonGuide20 from '../data/city_guides/lyon_guide_20.json';
import lyonGuide21 from '../data/city_guides/lyon_guide_21.json';
import lyonGuide22 from '../data/city_guides/lyon_guide_22.json';
import lyonGuide23 from '../data/city_guides/lyon_guide_23.json';
import lyonGuide24 from '../data/city_guides/lyon_guide_24.json';
import lyonGuide25 from '../data/city_guides/lyon_guide_25.json';
import lyonGuide26 from '../data/city_guides/lyon_guide_26.json';
import lyonGuide27 from '../data/city_guides/lyon_guide_27.json';
import lyonGuide28 from '../data/city_guides/lyon_guide_28.json';
import lyonGuide29 from '../data/city_guides/lyon_guide_29.json';
import lyonGuide30 from '../data/city_guides/lyon_guide_30.json';
import lyonGuide31 from '../data/city_guides/lyon_guide_31.json';
import lyonGuide32 from '../data/city_guides/lyon_guide_32.json';
import lyonGuide33 from '../data/city_guides/lyon_guide_33.json';
import lyonGuide34 from '../data/city_guides/lyon_guide_34.json';
import lyonGuide35 from '../data/city_guides/lyon_guide_35.json';
import lyonGuide36 from '../data/city_guides/lyon_guide_36.json';
import lyonGuide37 from '../data/city_guides/lyon_guide_37.json';
import lyonGuide38 from '../data/city_guides/lyon_guide_38.json';
import lyonGuide39 from '../data/city_guides/lyon_guide_39.json';
import lyonGuide40 from '../data/city_guides/lyon_guide_40.json';
import lyonGuide41 from '../data/city_guides/lyon_guide_41.json';
import lyonGuide42 from '../data/city_guides/lyon_guide_42.json';
import lyonGuide43 from '../data/city_guides/lyon_guide_43.json';
import lyonGuide44 from '../data/city_guides/lyon_guide_44.json';
import lyonGuide45 from '../data/city_guides/lyon_guide_45.json';
import lyonGuide46 from '../data/city_guides/lyon_guide_46.json';
import lyonGuide47 from '../data/city_guides/lyon_guide_47.json';
import lyonGuide48 from '../data/city_guides/lyon_guide_48.json';
import lyonGuide49 from '../data/city_guides/lyon_guide_49.json';
import lyonGuide50 from '../data/city_guides/lyon_guide_50.json';
import marseilleGuide01 from '../data/city_guides/marseille_guide_01.json';
import marseilleGuide02 from '../data/city_guides/marseille_guide_02.json';
import marseilleGuide03 from '../data/city_guides/marseille_guide_03.json';
import marseilleGuide04 from '../data/city_guides/marseille_guide_04.json';
import marseilleGuide05 from '../data/city_guides/marseille_guide_05.json';
import marseilleGuide06 from '../data/city_guides/marseille_guide_06.json';
import marseilleGuide07 from '../data/city_guides/marseille_guide_07.json';
import marseilleGuide08 from '../data/city_guides/marseille_guide_08.json';
import marseilleGuide09 from '../data/city_guides/marseille_guide_09.json';
import marseilleGuide10 from '../data/city_guides/marseille_guide_10.json';
import marseilleGuide11 from '../data/city_guides/marseille_guide_11.json';
import marseilleGuide12 from '../data/city_guides/marseille_guide_12.json';
import marseilleGuide13 from '../data/city_guides/marseille_guide_13.json';
import marseilleGuide14 from '../data/city_guides/marseille_guide_14.json';
import marseilleGuide15 from '../data/city_guides/marseille_guide_15.json';
import marseilleGuide16 from '../data/city_guides/marseille_guide_16.json';
import marseilleGuide17 from '../data/city_guides/marseille_guide_17.json';
import marseilleGuide18 from '../data/city_guides/marseille_guide_18.json';
import marseilleGuide19 from '../data/city_guides/marseille_guide_19.json';
import marseilleGuide20 from '../data/city_guides/marseille_guide_20.json';
import marseilleGuide21 from '../data/city_guides/marseille_guide_21.json';
import marseilleGuide23 from '../data/city_guides/marseille_guide_23.json';
import marseilleGuide24 from '../data/city_guides/marseille_guide_24.json';
import marseilleGuide25 from '../data/city_guides/marseille_guide_25.json';
import marseilleGuide26 from '../data/city_guides/marseille_guide_26.json';
import marseilleGuide27 from '../data/city_guides/marseille_guide_27.json';
import marseilleGuide28 from '../data/city_guides/marseille_guide_28.json';
import marseilleGuide29 from '../data/city_guides/marseille_guide_29.json';
import marseilleGuide30 from '../data/city_guides/marseille_guide_30.json';
import marseilleGuide31 from '../data/city_guides/marseille_guide_31.json';
import marseilleGuide32 from '../data/city_guides/marseille_guide_32.json';
import marseilleGuide33 from '../data/city_guides/marseille_guide_33.json';
import marseilleGuide34 from '../data/city_guides/marseille_guide_34.json';
import marseilleGuide35 from '../data/city_guides/marseille_guide_35.json';
import marseilleGuide36 from '../data/city_guides/marseille_guide_36.json';
import marseilleGuide37 from '../data/city_guides/marseille_guide_37.json';
import marseilleGuide38 from '../data/city_guides/marseille_guide_38.json';
import marseilleGuide39 from '../data/city_guides/marseille_guide_39.json';
import marseilleGuide40 from '../data/city_guides/marseille_guide_40.json';
import marseilleGuide41 from '../data/city_guides/marseille_guide_41.json';
import marseilleGuide42 from '../data/city_guides/marseille_guide_42.json';
import marseilleGuide43 from '../data/city_guides/marseille_guide_43.json';
import marseilleGuide44 from '../data/city_guides/marseille_guide_44.json';
import marseilleGuide45 from '../data/city_guides/marseille_guide_45.json';
import marseilleGuide46 from '../data/city_guides/marseille_guide_46.json';
import marseilleGuide47 from '../data/city_guides/marseille_guide_47.json';
import marseilleGuide48 from '../data/city_guides/marseille_guide_48.json';
import marseilleGuide49 from '../data/city_guides/marseille_guide_49.json';
import strasbourgGuide01 from '../data/city_guides/strasbourg_guide_01.json';
import strasbourgGuide02 from '../data/city_guides/strasbourg_guide_02.json';
import strasbourgGuide03 from '../data/city_guides/strasbourg_guide_03.json';
import strasbourgGuide04 from '../data/city_guides/strasbourg_guide_04.json';
import strasbourgGuide05 from '../data/city_guides/strasbourg_guide_05.json';
import strasbourgGuide06 from '../data/city_guides/strasbourg_guide_06.json';
import strasbourgGuide07 from '../data/city_guides/strasbourg_guide_07.json';
import strasbourgGuide08 from '../data/city_guides/strasbourg_guide_08.json';
import strasbourgGuide09 from '../data/city_guides/strasbourg_guide_09.json';
import strasbourgGuide10 from '../data/city_guides/strasbourg_guide_10.json';
import strasbourgGuide11 from '../data/city_guides/strasbourg_guide_11.json';
import strasbourgGuide12 from '../data/city_guides/strasbourg_guide_12.json';
import strasbourgGuide13 from '../data/city_guides/strasbourg_guide_13.json';
import strasbourgGuide14 from '../data/city_guides/strasbourg_guide_14.json';
import strasbourgGuide15 from '../data/city_guides/strasbourg_guide_15.json';
import strasbourgGuide16 from '../data/city_guides/strasbourg_guide_16.json';
import strasbourgGuide17 from '../data/city_guides/strasbourg_guide_17.json';
import strasbourgGuide18 from '../data/city_guides/strasbourg_guide_18.json';
import strasbourgGuide19 from '../data/city_guides/strasbourg_guide_19.json';
import strasbourgGuide20 from '../data/city_guides/strasbourg_guide_20.json';
import strasbourgGuide21 from '../data/city_guides/strasbourg_guide_21.json';
import strasbourgGuide22 from '../data/city_guides/strasbourg_guide_22.json';
import strasbourgGuide23 from '../data/city_guides/strasbourg_guide_23.json';
import strasbourgGuide24 from '../data/city_guides/strasbourg_guide_24.json';
import strasbourgGuide25 from '../data/city_guides/strasbourg_guide_25.json';
import strasbourgGuide26 from '../data/city_guides/strasbourg_guide_26.json';
import strasbourgGuide27 from '../data/city_guides/strasbourg_guide_27.json';
import strasbourgGuide28 from '../data/city_guides/strasbourg_guide_28.json';
import strasbourgGuide29 from '../data/city_guides/strasbourg_guide_29.json';
import strasbourgGuide30 from '../data/city_guides/strasbourg_guide_30.json';
import strasbourgGuide31 from '../data/city_guides/strasbourg_guide_31.json';
import strasbourgGuide32 from '../data/city_guides/strasbourg_guide_32.json';
import strasbourgGuide33 from '../data/city_guides/strasbourg_guide_33.json';
import strasbourgGuide34 from '../data/city_guides/strasbourg_guide_34.json';
import strasbourgGuide35 from '../data/city_guides/strasbourg_guide_35.json';
import strasbourgGuide36 from '../data/city_guides/strasbourg_guide_36.json';
import strasbourgGuide37 from '../data/city_guides/strasbourg_guide_37.json';
import strasbourgGuide38 from '../data/city_guides/strasbourg_guide_38.json';
import strasbourgGuide39 from '../data/city_guides/strasbourg_guide_39.json';
import strasbourgGuide40 from '../data/city_guides/strasbourg_guide_40.json';
import strasbourgGuide41 from '../data/city_guides/strasbourg_guide_41.json';
import strasbourgGuide42 from '../data/city_guides/strasbourg_guide_42.json';
import strasbourgGuide43 from '../data/city_guides/strasbourg_guide_43.json';
import strasbourgGuide44 from '../data/city_guides/strasbourg_guide_44.json';
import strasbourgGuide45 from '../data/city_guides/strasbourg_guide_45.json';
import strasbourgGuide46 from '../data/city_guides/strasbourg_guide_46.json';
import strasbourgGuide47 from '../data/city_guides/strasbourg_guide_47.json';
import strasbourgGuide48 from '../data/city_guides/strasbourg_guide_48.json';
import strasbourgGuide49 from '../data/city_guides/strasbourg_guide_49.json';
import strasbourgGuide50 from '../data/city_guides/strasbourg_guide_50.json';
import niceGuide01 from '../data/city_guides/nice_guide_01.json';
import niceGuide02 from '../data/city_guides/nice_guide_02.json';
import niceGuide03 from '../data/city_guides/nice_guide_03.json';
import niceGuide04 from '../data/city_guides/nice_guide_04.json';
import niceGuide05 from '../data/city_guides/nice_guide_05.json';
import niceGuide06 from '../data/city_guides/nice_guide_06.json';
import niceGuide07 from '../data/city_guides/nice_guide_07.json';
import niceGuide08 from '../data/city_guides/nice_guide_08.json';
import niceGuide09 from '../data/city_guides/nice_guide_09.json';
import niceGuide10 from '../data/city_guides/nice_guide_10.json';
import niceGuide11 from '../data/city_guides/nice_guide_11.json';
import niceGuide12 from '../data/city_guides/nice_guide_12.json';
import niceGuide13 from '../data/city_guides/nice_guide_13.json';
import niceGuide14 from '../data/city_guides/nice_guide_14.json';
import niceGuide15 from '../data/city_guides/nice_guide_15.json';
import niceGuide16 from '../data/city_guides/nice_guide_16.json';
import niceGuide17 from '../data/city_guides/nice_guide_17.json';
import niceGuide18 from '../data/city_guides/nice_guide_18.json';
import niceGuide19 from '../data/city_guides/nice_guide_19.json';
import niceGuide20 from '../data/city_guides/nice_guide_20.json';
import niceGuide21 from '../data/city_guides/nice_guide_21.json';
import niceGuide22 from '../data/city_guides/nice_guide_22.json';
import niceGuide23 from '../data/city_guides/nice_guide_23.json';
import niceGuide24 from '../data/city_guides/nice_guide_24.json';
import niceGuide25 from '../data/city_guides/nice_guide_25.json';
import niceGuide26 from '../data/city_guides/nice_guide_26.json';
import niceGuide27 from '../data/city_guides/nice_guide_27.json';
import niceGuide28 from '../data/city_guides/nice_guide_28.json';
import niceGuide29 from '../data/city_guides/nice_guide_29.json';
import niceGuide30 from '../data/city_guides/nice_guide_30.json';
import niceGuide31 from '../data/city_guides/nice_guide_31.json';
import niceGuide32 from '../data/city_guides/nice_guide_32.json';
import niceGuide33 from '../data/city_guides/nice_guide_33.json';
import niceGuide34 from '../data/city_guides/nice_guide_34.json';
import niceGuide35 from '../data/city_guides/nice_guide_35.json';
import niceGuide36 from '../data/city_guides/nice_guide_36.json';
import niceGuide37 from '../data/city_guides/nice_guide_37.json';
import niceGuide38 from '../data/city_guides/nice_guide_38.json';
import niceGuide39 from '../data/city_guides/nice_guide_39.json';
import niceGuide40 from '../data/city_guides/nice_guide_40.json';
import niceGuide41 from '../data/city_guides/nice_guide_41.json';
import niceGuide42 from '../data/city_guides/nice_guide_42.json';
import niceGuide43 from '../data/city_guides/nice_guide_43.json';
import niceGuide44 from '../data/city_guides/nice_guide_44.json';
import niceGuide45 from '../data/city_guides/nice_guide_45.json';
import niceGuide46 from '../data/city_guides/nice_guide_46.json';
import niceGuide47 from '../data/city_guides/nice_guide_47.json';
import niceGuide48 from '../data/city_guides/nice_guide_48.json';
import niceGuide49 from '../data/city_guides/nice_guide_49.json';
import niceGuide50 from '../data/city_guides/nice_guide_50.json';
import niceGuide51 from '../data/city_guides/nice_guide_51.json';
import niceGuide52 from '../data/city_guides/nice_guide_52.json';
import niceGuide53 from '../data/city_guides/nice_guide_53.json';
import niceGuide54 from '../data/city_guides/nice_guide_54.json';
import niceGuide55 from '../data/city_guides/nice_guide_55.json';
import niceGuide56 from '../data/city_guides/nice_guide_56.json';import niceGuide57 from '../data/city_guides/nice_guide_57.json';


interface EncyclopediaViewProps {
  progress: UserMapProgress;
  onNavigateToFlashcards?: () => void;
}

/** Dossiês por cidade. Cada seção é uma "aula" no formato padrão (paragraphs + vocabularyDictionary). */
const CITY_GUIDES: Record<string, Array<Record<string, unknown>>> = {
  paris: [
    parisGuide01 as unknown as Record<string, unknown>,
    parisGuide02 as unknown as Record<string, unknown>,
    parisGuide03 as unknown as Record<string, unknown>,
    parisGuide04 as unknown as Record<string, unknown>,
    parisGuide05 as unknown as Record<string, unknown>,
    parisGuide06 as unknown as Record<string, unknown>,
    parisGuide07 as unknown as Record<string, unknown>,
    parisGuide08 as unknown as Record<string, unknown>,
    parisGuide09 as unknown as Record<string, unknown>,
    parisGuide10 as unknown as Record<string, unknown>,
    parisGuide11 as unknown as Record<string, unknown>,
    parisGuide12 as unknown as Record<string, unknown>,
    parisGuide13 as unknown as Record<string, unknown>,
    parisGuide14 as unknown as Record<string, unknown>,
    parisGuide15 as unknown as Record<string, unknown>,
    parisGuide16 as unknown as Record<string, unknown>,
    parisGuide17 as unknown as Record<string, unknown>,
    parisGuide18 as unknown as Record<string, unknown>,
    parisGuide19 as unknown as Record<string, unknown>,
    parisGuide20 as unknown as Record<string, unknown>,
    parisGuide21 as unknown as Record<string, unknown>,
    parisGuide22 as unknown as Record<string, unknown>,
    parisGuide23 as unknown as Record<string, unknown>,
    parisGuide24 as unknown as Record<string, unknown>,
    parisGuide25 as unknown as Record<string, unknown>,
    parisGuide26 as unknown as Record<string, unknown>,
    parisGuide27 as unknown as Record<string, unknown>,
    parisGuide28 as unknown as Record<string, unknown>,
    parisGuide29 as unknown as Record<string, unknown>,
    parisGuide30 as unknown as Record<string, unknown>,
    parisGuide31 as unknown as Record<string, unknown>,
    parisGuide32 as unknown as Record<string, unknown>,
    parisGuide33 as unknown as Record<string, unknown>,
    parisGuide34 as unknown as Record<string, unknown>,
    parisGuide35 as unknown as Record<string, unknown>,
    parisGuide36 as unknown as Record<string, unknown>,
    parisGuide37 as unknown as Record<string, unknown>,
    parisGuide38 as unknown as Record<string, unknown>,
    parisGuide39 as unknown as Record<string, unknown>,
    parisGuide40 as unknown as Record<string, unknown>,
    parisGuide41 as unknown as Record<string, unknown>,
    parisGuide42 as unknown as Record<string, unknown>,
    parisGuide43 as unknown as Record<string, unknown>,
    parisGuide44 as unknown as Record<string, unknown>,
    parisGuide45 as unknown as Record<string, unknown>,
    parisGuide46 as unknown as Record<string, unknown>,
    parisGuide47 as unknown as Record<string, unknown>,
    parisGuide48 as unknown as Record<string, unknown>,
    parisGuide49 as unknown as Record<string, unknown>,
    parisGuide50 as unknown as Record<string, unknown>,
    parisGuide51 as unknown as Record<string, unknown>,
  ],
  amiens: [
    amiensGuide01 as unknown as Record<string, unknown>,
    amiensGuide02 as unknown as Record<string, unknown>,
    amiensGuide03 as unknown as Record<string, unknown>,
    amiensGuide04 as unknown as Record<string, unknown>,
    amiensGuide05 as unknown as Record<string, unknown>,
    amiensGuide06 as unknown as Record<string, unknown>,
    amiensGuide07 as unknown as Record<string, unknown>,
    amiensGuide08 as unknown as Record<string, unknown>,
    amiensGuide09 as unknown as Record<string, unknown>,
    amiensGuide10 as unknown as Record<string, unknown>,
    amiensGuide11 as unknown as Record<string, unknown>,
    amiensGuide12 as unknown as Record<string, unknown>,
    amiensGuide13 as unknown as Record<string, unknown>,
    amiensGuide14 as unknown as Record<string, unknown>,
    amiensGuide15 as unknown as Record<string, unknown>,
    amiensGuide16 as unknown as Record<string, unknown>,
    amiensGuide17 as unknown as Record<string, unknown>,
    amiensGuide18 as unknown as Record<string, unknown>,
    amiensGuide19 as unknown as Record<string, unknown>,
    amiensGuide20 as unknown as Record<string, unknown>,
    amiensGuide21 as unknown as Record<string, unknown>,
    amiensGuide22 as unknown as Record<string, unknown>,
    amiensGuide23 as unknown as Record<string, unknown>,
    amiensGuide24 as unknown as Record<string, unknown>,
    amiensGuide25 as unknown as Record<string, unknown>,
    amiensGuide26 as unknown as Record<string, unknown>,
    amiensGuide27 as unknown as Record<string, unknown>,
    amiensGuide28 as unknown as Record<string, unknown>,
    amiensGuide29 as unknown as Record<string, unknown>,
    amiensGuide30 as unknown as Record<string, unknown>,
    amiensGuide31 as unknown as Record<string, unknown>,
    amiensGuide32 as unknown as Record<string, unknown>,
    amiensGuide33 as unknown as Record<string, unknown>,
    amiensGuide34 as unknown as Record<string, unknown>,
    amiensGuide35 as unknown as Record<string, unknown>,
    amiensGuide36 as unknown as Record<string, unknown>,
    amiensGuide37 as unknown as Record<string, unknown>,
    amiensGuide38 as unknown as Record<string, unknown>,
    amiensGuide39 as unknown as Record<string, unknown>,
    amiensGuide40 as unknown as Record<string, unknown>,
    amiensGuide41 as unknown as Record<string, unknown>,
    amiensGuide42 as unknown as Record<string, unknown>,
    amiensGuide43 as unknown as Record<string, unknown>,
  ],
  lille: [
    lilleGuide01 as unknown as Record<string, unknown>,
    lilleGuide02 as unknown as Record<string, unknown>,
    lilleGuide03 as unknown as Record<string, unknown>,
    lilleGuide04 as unknown as Record<string, unknown>,
    lilleGuide05 as unknown as Record<string, unknown>,
    lilleGuide06 as unknown as Record<string, unknown>,
    lilleGuide07 as unknown as Record<string, unknown>,
    lilleGuide08 as unknown as Record<string, unknown>,
    lilleGuide09 as unknown as Record<string, unknown>,
    lilleGuide10 as unknown as Record<string, unknown>,
    lilleGuide11 as unknown as Record<string, unknown>,
    lilleGuide12 as unknown as Record<string, unknown>,
    lilleGuide13 as unknown as Record<string, unknown>,
    lilleGuide14 as unknown as Record<string, unknown>,
    lilleGuide15 as unknown as Record<string, unknown>,
    lilleGuide16 as unknown as Record<string, unknown>,
    lilleGuide17 as unknown as Record<string, unknown>,
    lilleGuide18 as unknown as Record<string, unknown>,
    lilleGuide19 as unknown as Record<string, unknown>,
    lilleGuide20 as unknown as Record<string, unknown>,
    lilleGuide21 as unknown as Record<string, unknown>,
    lilleGuide22 as unknown as Record<string, unknown>,
    lilleGuide23 as unknown as Record<string, unknown>,
    lilleGuide24 as unknown as Record<string, unknown>,
    lilleGuide25 as unknown as Record<string, unknown>,
    lilleGuide26 as unknown as Record<string, unknown>,
    lilleGuide27 as unknown as Record<string, unknown>,
    lilleGuide28 as unknown as Record<string, unknown>,
    lilleGuide29 as unknown as Record<string, unknown>,
    lilleGuide30 as unknown as Record<string, unknown>,
    lilleGuide31 as unknown as Record<string, unknown>,
    lilleGuide32 as unknown as Record<string, unknown>,
    lilleGuide33 as unknown as Record<string, unknown>,
    lilleGuide34 as unknown as Record<string, unknown>,
    lilleGuide35 as unknown as Record<string, unknown>,
    lilleGuide36 as unknown as Record<string, unknown>,
    lilleGuide37 as unknown as Record<string, unknown>,
    lilleGuide38 as unknown as Record<string, unknown>,
    lilleGuide39 as unknown as Record<string, unknown>,
    lilleGuide40 as unknown as Record<string, unknown>,
    lilleGuide41 as unknown as Record<string, unknown>,
  ],
  'mont-saint-michel': [
    msmGuide01 as unknown as Record<string, unknown>,
    msmGuide02 as unknown as Record<string, unknown>,
    msmGuide03 as unknown as Record<string, unknown>,
    msmGuide04 as unknown as Record<string, unknown>,
    msmGuide05 as unknown as Record<string, unknown>,
    msmGuide06 as unknown as Record<string, unknown>,
    msmGuide07 as unknown as Record<string, unknown>,
    msmGuide08 as unknown as Record<string, unknown>,
    msmGuide09 as unknown as Record<string, unknown>,
    msmGuide10 as unknown as Record<string, unknown>,
    msmGuide11 as unknown as Record<string, unknown>,
    msmGuide12 as unknown as Record<string, unknown>,
    msmGuide13 as unknown as Record<string, unknown>,
    msmGuide14 as unknown as Record<string, unknown>,
    msmGuide15 as unknown as Record<string, unknown>,
    msmGuide16 as unknown as Record<string, unknown>,
    msmGuide17 as unknown as Record<string, unknown>,
    msmGuide18 as unknown as Record<string, unknown>,
    msmGuide19 as unknown as Record<string, unknown>,
    msmGuide20 as unknown as Record<string, unknown>,
    msmGuide21 as unknown as Record<string, unknown>,
    msmGuide22 as unknown as Record<string, unknown>,
    msmGuide23 as unknown as Record<string, unknown>,
    msmGuide24 as unknown as Record<string, unknown>,
    msmGuide25 as unknown as Record<string, unknown>,
    msmGuide26 as unknown as Record<string, unknown>,
    msmGuide27 as unknown as Record<string, unknown>,
    msmGuide28 as unknown as Record<string, unknown>,
    msmGuide29 as unknown as Record<string, unknown>,
    msmGuide30 as unknown as Record<string, unknown>,
    msmGuide31 as unknown as Record<string, unknown>,
    msmGuide32 as unknown as Record<string, unknown>,
    msmGuide33 as unknown as Record<string, unknown>,
    msmGuide34 as unknown as Record<string, unknown>,
    msmGuide35 as unknown as Record<string, unknown>,
    msmGuide36 as unknown as Record<string, unknown>,
    msmGuide37 as unknown as Record<string, unknown>,
    msmGuide38 as unknown as Record<string, unknown>,
    msmGuide39 as unknown as Record<string, unknown>,
    msmGuide40 as unknown as Record<string, unknown>,
  ],
  tours: [
    toursGuide01 as unknown as Record<string, unknown>,
    toursGuide02 as unknown as Record<string, unknown>,
    toursGuide03 as unknown as Record<string, unknown>,
    toursGuide04 as unknown as Record<string, unknown>,
    toursGuide05 as unknown as Record<string, unknown>,
    toursGuide06 as unknown as Record<string, unknown>,
    toursGuide07 as unknown as Record<string, unknown>,
    toursGuide08 as unknown as Record<string, unknown>,
    toursGuide09 as unknown as Record<string, unknown>,
    toursGuide10 as unknown as Record<string, unknown>,
    toursGuide11 as unknown as Record<string, unknown>,
    toursGuide12 as unknown as Record<string, unknown>,
    toursGuide13 as unknown as Record<string, unknown>,
    toursGuide14 as unknown as Record<string, unknown>,
    toursGuide15 as unknown as Record<string, unknown>,
    toursGuide16 as unknown as Record<string, unknown>,
    toursGuide17 as unknown as Record<string, unknown>,
    toursGuide18 as unknown as Record<string, unknown>,
    toursGuide19 as unknown as Record<string, unknown>,
    toursGuide20 as unknown as Record<string, unknown>,
    toursGuide21 as unknown as Record<string, unknown>,
    toursGuide22 as unknown as Record<string, unknown>,
    toursGuide23 as unknown as Record<string, unknown>,
    toursGuide24 as unknown as Record<string, unknown>,
    toursGuide25 as unknown as Record<string, unknown>,
    toursGuide26 as unknown as Record<string, unknown>,
    toursGuide27 as unknown as Record<string, unknown>,
    toursGuide28 as unknown as Record<string, unknown>,
    toursGuide29 as unknown as Record<string, unknown>,
    toursGuide30 as unknown as Record<string, unknown>,
    toursGuide31 as unknown as Record<string, unknown>,
    toursGuide32 as unknown as Record<string, unknown>,
    toursGuide33 as unknown as Record<string, unknown>,
    toursGuide34 as unknown as Record<string, unknown>,
    toursGuide35 as unknown as Record<string, unknown>,
    toursGuide36 as unknown as Record<string, unknown>,
    toursGuide37 as unknown as Record<string, unknown>,
    toursGuide38 as unknown as Record<string, unknown>,
    toursGuide39 as unknown as Record<string, unknown>,
  ],
  bordeaux: [
    bordeauxGuide01 as unknown as Record<string, unknown>,
    bordeauxGuide02 as unknown as Record<string, unknown>,
    bordeauxGuide03 as unknown as Record<string, unknown>,
    bordeauxGuide04 as unknown as Record<string, unknown>,
    bordeauxGuide05 as unknown as Record<string, unknown>,
    bordeauxGuide06 as unknown as Record<string, unknown>,
    bordeauxGuide07 as unknown as Record<string, unknown>,
    bordeauxGuide08 as unknown as Record<string, unknown>,
    bordeauxGuide09 as unknown as Record<string, unknown>,
    bordeauxGuide10 as unknown as Record<string, unknown>,
    bordeauxGuide11 as unknown as Record<string, unknown>,
    bordeauxGuide12 as unknown as Record<string, unknown>,
    bordeauxGuide13 as unknown as Record<string, unknown>,
    bordeauxGuide14 as unknown as Record<string, unknown>,
    bordeauxGuide15 as unknown as Record<string, unknown>,
    bordeauxGuide16 as unknown as Record<string, unknown>,
    bordeauxGuide17 as unknown as Record<string, unknown>,
    bordeauxGuide18 as unknown as Record<string, unknown>,
    bordeauxGuide19 as unknown as Record<string, unknown>,
    bordeauxGuide20 as unknown as Record<string, unknown>,
    bordeauxGuide21 as unknown as Record<string, unknown>,
    bordeauxGuide22 as unknown as Record<string, unknown>,
    bordeauxGuide23 as unknown as Record<string, unknown>,
    bordeauxGuide24 as unknown as Record<string, unknown>,
    bordeauxGuide25 as unknown as Record<string, unknown>,
    bordeauxGuide26 as unknown as Record<string, unknown>,
    bordeauxGuide27 as unknown as Record<string, unknown>,
    bordeauxGuide28 as unknown as Record<string, unknown>,
    bordeauxGuide29 as unknown as Record<string, unknown>,
    bordeauxGuide30 as unknown as Record<string, unknown>,
    bordeauxGuide31 as unknown as Record<string, unknown>,
    bordeauxGuide32 as unknown as Record<string, unknown>,
    bordeauxGuide33 as unknown as Record<string, unknown>,
    bordeauxGuide34 as unknown as Record<string, unknown>,
    bordeauxGuide35 as unknown as Record<string, unknown>,
    bordeauxGuide36 as unknown as Record<string, unknown>,
    bordeauxGuide37 as unknown as Record<string, unknown>,
    bordeauxGuide38 as unknown as Record<string, unknown>,
    bordeauxGuide39 as unknown as Record<string, unknown>,
    bordeauxGuide40 as unknown as Record<string, unknown>,
    bordeauxGuide41 as unknown as Record<string, unknown>,
    bordeauxGuide42 as unknown as Record<string, unknown>,
    bordeauxGuide43 as unknown as Record<string, unknown>,
    bordeauxGuide44 as unknown as Record<string, unknown>,
  ],
  toulouse: [
    toulouseGuide01 as unknown as Record<string, unknown>,
    toulouseGuide02 as unknown as Record<string, unknown>,
    toulouseGuide03 as unknown as Record<string, unknown>,
    toulouseGuide04 as unknown as Record<string, unknown>,
    toulouseGuide05 as unknown as Record<string, unknown>,
    toulouseGuide06 as unknown as Record<string, unknown>,
    toulouseGuide07 as unknown as Record<string, unknown>,
    toulouseGuide08 as unknown as Record<string, unknown>,
    toulouseGuide09 as unknown as Record<string, unknown>,
    toulouseGuide10 as unknown as Record<string, unknown>,
    toulouseGuide11 as unknown as Record<string, unknown>,
    toulouseGuide12 as unknown as Record<string, unknown>,
    toulouseGuide13 as unknown as Record<string, unknown>,
    toulouseGuide14 as unknown as Record<string, unknown>,
    toulouseGuide15 as unknown as Record<string, unknown>,
    toulouseGuide16 as unknown as Record<string, unknown>,
    toulouseGuide17 as unknown as Record<string, unknown>,
    toulouseGuide18 as unknown as Record<string, unknown>,
    toulouseGuide19 as unknown as Record<string, unknown>,
    toulouseGuide20 as unknown as Record<string, unknown>,
    toulouseGuide21 as unknown as Record<string, unknown>,
    toulouseGuide22 as unknown as Record<string, unknown>,
    toulouseGuide23 as unknown as Record<string, unknown>,
    toulouseGuide24 as unknown as Record<string, unknown>,
    toulouseGuide25 as unknown as Record<string, unknown>,
    toulouseGuide26 as unknown as Record<string, unknown>,
    toulouseGuide27 as unknown as Record<string, unknown>,
    toulouseGuide28 as unknown as Record<string, unknown>,
    toulouseGuide29 as unknown as Record<string, unknown>,
    toulouseGuide30 as unknown as Record<string, unknown>,
    toulouseGuide31 as unknown as Record<string, unknown>,
    toulouseGuide32 as unknown as Record<string, unknown>,
    toulouseGuide33 as unknown as Record<string, unknown>,
    toulouseGuide34 as unknown as Record<string, unknown>,
    toulouseGuide35 as unknown as Record<string, unknown>,
    toulouseGuide36 as unknown as Record<string, unknown>,
    toulouseGuide37 as unknown as Record<string, unknown>,
    toulouseGuide38 as unknown as Record<string, unknown>,
    toulouseGuide39 as unknown as Record<string, unknown>,
    toulouseGuide40 as unknown as Record<string, unknown>,
    toulouseGuide41 as unknown as Record<string, unknown>,
    toulouseGuide42 as unknown as Record<string, unknown>,
    toulouseGuide43 as unknown as Record<string, unknown>,
    toulouseGuide44 as unknown as Record<string, unknown>,
  ],
  lyon: [
    lyonGuide01 as unknown as Record<string, unknown>,
    lyonGuide02 as unknown as Record<string, unknown>,
    lyonGuide03 as unknown as Record<string, unknown>,
    lyonGuide04 as unknown as Record<string, unknown>,
    lyonGuide05 as unknown as Record<string, unknown>,
    lyonGuide06 as unknown as Record<string, unknown>,
    lyonGuide07 as unknown as Record<string, unknown>,
    lyonGuide08 as unknown as Record<string, unknown>,
    lyonGuide09 as unknown as Record<string, unknown>,
    lyonGuide10 as unknown as Record<string, unknown>,
    lyonGuide11 as unknown as Record<string, unknown>,
    lyonGuide12 as unknown as Record<string, unknown>,
    lyonGuide13 as unknown as Record<string, unknown>,
    lyonGuide14 as unknown as Record<string, unknown>,
    lyonGuide15 as unknown as Record<string, unknown>,
    lyonGuide16 as unknown as Record<string, unknown>,
    lyonGuide17 as unknown as Record<string, unknown>,
    lyonGuide18 as unknown as Record<string, unknown>,
    lyonGuide19 as unknown as Record<string, unknown>,
    lyonGuide20 as unknown as Record<string, unknown>,
    lyonGuide21 as unknown as Record<string, unknown>,
    lyonGuide22 as unknown as Record<string, unknown>,
    lyonGuide23 as unknown as Record<string, unknown>,
    lyonGuide24 as unknown as Record<string, unknown>,
    lyonGuide25 as unknown as Record<string, unknown>,
    lyonGuide26 as unknown as Record<string, unknown>,
    lyonGuide27 as unknown as Record<string, unknown>,
    lyonGuide28 as unknown as Record<string, unknown>,
    lyonGuide29 as unknown as Record<string, unknown>,
    lyonGuide30 as unknown as Record<string, unknown>,
    lyonGuide31 as unknown as Record<string, unknown>,
    lyonGuide32 as unknown as Record<string, unknown>,
    lyonGuide33 as unknown as Record<string, unknown>,
    lyonGuide34 as unknown as Record<string, unknown>,
    lyonGuide35 as unknown as Record<string, unknown>,
    lyonGuide36 as unknown as Record<string, unknown>,
    lyonGuide37 as unknown as Record<string, unknown>,
    lyonGuide38 as unknown as Record<string, unknown>,
    lyonGuide39 as unknown as Record<string, unknown>,
    lyonGuide40 as unknown as Record<string, unknown>,
    lyonGuide41 as unknown as Record<string, unknown>,
    lyonGuide42 as unknown as Record<string, unknown>,
    lyonGuide43 as unknown as Record<string, unknown>,
    lyonGuide44 as unknown as Record<string, unknown>,
    lyonGuide45 as unknown as Record<string, unknown>,
    lyonGuide46 as unknown as Record<string, unknown>,
    lyonGuide47 as unknown as Record<string, unknown>,
    lyonGuide48 as unknown as Record<string, unknown>,
    lyonGuide49 as unknown as Record<string, unknown>,
    lyonGuide50 as unknown as Record<string, unknown>,
  ],
  marseille: [
    marseilleGuide01 as unknown as Record<string, unknown>,
    marseilleGuide02 as unknown as Record<string, unknown>,
    marseilleGuide03 as unknown as Record<string, unknown>,
    marseilleGuide04 as unknown as Record<string, unknown>,
    marseilleGuide05 as unknown as Record<string, unknown>,
    marseilleGuide06 as unknown as Record<string, unknown>,
    marseilleGuide07 as unknown as Record<string, unknown>,
    marseilleGuide08 as unknown as Record<string, unknown>,
    marseilleGuide09 as unknown as Record<string, unknown>,
    marseilleGuide10 as unknown as Record<string, unknown>,
    marseilleGuide11 as unknown as Record<string, unknown>,
    marseilleGuide12 as unknown as Record<string, unknown>,
    marseilleGuide13 as unknown as Record<string, unknown>,
    marseilleGuide14 as unknown as Record<string, unknown>,
    marseilleGuide15 as unknown as Record<string, unknown>,
    marseilleGuide16 as unknown as Record<string, unknown>,
    marseilleGuide17 as unknown as Record<string, unknown>,
    marseilleGuide18 as unknown as Record<string, unknown>,
    marseilleGuide19 as unknown as Record<string, unknown>,
    marseilleGuide20 as unknown as Record<string, unknown>,
    marseilleGuide21 as unknown as Record<string, unknown>,
    marseilleGuide23 as unknown as Record<string, unknown>,
    marseilleGuide24 as unknown as Record<string, unknown>,
    marseilleGuide25 as unknown as Record<string, unknown>,
    marseilleGuide26 as unknown as Record<string, unknown>,
    marseilleGuide27 as unknown as Record<string, unknown>,
    marseilleGuide28 as unknown as Record<string, unknown>,
    marseilleGuide29 as unknown as Record<string, unknown>,
    marseilleGuide30 as unknown as Record<string, unknown>,
    marseilleGuide31 as unknown as Record<string, unknown>,
    marseilleGuide32 as unknown as Record<string, unknown>,
    marseilleGuide33 as unknown as Record<string, unknown>,
    marseilleGuide34 as unknown as Record<string, unknown>,
    marseilleGuide35 as unknown as Record<string, unknown>,
    marseilleGuide36 as unknown as Record<string, unknown>,
    marseilleGuide37 as unknown as Record<string, unknown>,
    marseilleGuide38 as unknown as Record<string, unknown>,
    marseilleGuide39 as unknown as Record<string, unknown>,
    marseilleGuide40 as unknown as Record<string, unknown>,
    marseilleGuide41 as unknown as Record<string, unknown>,
    marseilleGuide42 as unknown as Record<string, unknown>,
    marseilleGuide43 as unknown as Record<string, unknown>,
    marseilleGuide44 as unknown as Record<string, unknown>,
    marseilleGuide45 as unknown as Record<string, unknown>,
    marseilleGuide46 as unknown as Record<string, unknown>,
    marseilleGuide47 as unknown as Record<string, unknown>,
    marseilleGuide48 as unknown as Record<string, unknown>,
    marseilleGuide49 as unknown as Record<string, unknown>,
  ],
  strasbourg: [
    strasbourgGuide01 as unknown as Record<string, unknown>,
    strasbourgGuide02 as unknown as Record<string, unknown>,
    strasbourgGuide03 as unknown as Record<string, unknown>,
    strasbourgGuide04 as unknown as Record<string, unknown>,
    strasbourgGuide05 as unknown as Record<string, unknown>,
    strasbourgGuide06 as unknown as Record<string, unknown>,
    strasbourgGuide07 as unknown as Record<string, unknown>,
    strasbourgGuide08 as unknown as Record<string, unknown>,
    strasbourgGuide09 as unknown as Record<string, unknown>,
    strasbourgGuide10 as unknown as Record<string, unknown>,
    strasbourgGuide11 as unknown as Record<string, unknown>,
    strasbourgGuide12 as unknown as Record<string, unknown>,
    strasbourgGuide13 as unknown as Record<string, unknown>,
    strasbourgGuide14 as unknown as Record<string, unknown>,
    strasbourgGuide15 as unknown as Record<string, unknown>,
    strasbourgGuide16 as unknown as Record<string, unknown>,
    strasbourgGuide17 as unknown as Record<string, unknown>,
    strasbourgGuide18 as unknown as Record<string, unknown>,
    strasbourgGuide19 as unknown as Record<string, unknown>,
    strasbourgGuide20 as unknown as Record<string, unknown>,
    strasbourgGuide21 as unknown as Record<string, unknown>,
    strasbourgGuide22 as unknown as Record<string, unknown>,
    strasbourgGuide23 as unknown as Record<string, unknown>,
    strasbourgGuide24 as unknown as Record<string, unknown>,
    strasbourgGuide25 as unknown as Record<string, unknown>,
    strasbourgGuide26 as unknown as Record<string, unknown>,
    strasbourgGuide27 as unknown as Record<string, unknown>,
    strasbourgGuide28 as unknown as Record<string, unknown>,
    strasbourgGuide29 as unknown as Record<string, unknown>,
    strasbourgGuide30 as unknown as Record<string, unknown>,
    strasbourgGuide31 as unknown as Record<string, unknown>,
    strasbourgGuide32 as unknown as Record<string, unknown>,
    strasbourgGuide33 as unknown as Record<string, unknown>,
    strasbourgGuide34 as unknown as Record<string, unknown>,
    strasbourgGuide35 as unknown as Record<string, unknown>,
    strasbourgGuide36 as unknown as Record<string, unknown>,
    strasbourgGuide37 as unknown as Record<string, unknown>,
    strasbourgGuide38 as unknown as Record<string, unknown>,
    strasbourgGuide39 as unknown as Record<string, unknown>,
    strasbourgGuide40 as unknown as Record<string, unknown>,
    strasbourgGuide41 as unknown as Record<string, unknown>,
    strasbourgGuide42 as unknown as Record<string, unknown>,
    strasbourgGuide43 as unknown as Record<string, unknown>,
    strasbourgGuide44 as unknown as Record<string, unknown>,
    strasbourgGuide45 as unknown as Record<string, unknown>,
    strasbourgGuide46 as unknown as Record<string, unknown>,
    strasbourgGuide47 as unknown as Record<string, unknown>,
    strasbourgGuide48 as unknown as Record<string, unknown>,
    strasbourgGuide49 as unknown as Record<string, unknown>,
    strasbourgGuide50 as unknown as Record<string, unknown>,
  ],
  nice: [
    niceGuide01 as unknown as Record<string, unknown>,
    niceGuide02 as unknown as Record<string, unknown>,
    niceGuide03 as unknown as Record<string, unknown>,
    niceGuide04 as unknown as Record<string, unknown>,
    niceGuide05 as unknown as Record<string, unknown>,
    niceGuide06 as unknown as Record<string, unknown>,
    niceGuide07 as unknown as Record<string, unknown>,
    niceGuide08 as unknown as Record<string, unknown>,
    niceGuide09 as unknown as Record<string, unknown>,
    niceGuide10 as unknown as Record<string, unknown>,
    niceGuide11 as unknown as Record<string, unknown>,
    niceGuide12 as unknown as Record<string, unknown>,
    niceGuide13 as unknown as Record<string, unknown>,
    niceGuide14 as unknown as Record<string, unknown>,
    niceGuide15 as unknown as Record<string, unknown>,
    niceGuide16 as unknown as Record<string, unknown>,
    niceGuide17 as unknown as Record<string, unknown>,
    niceGuide18 as unknown as Record<string, unknown>,
    niceGuide19 as unknown as Record<string, unknown>,
    niceGuide20 as unknown as Record<string, unknown>,
    niceGuide21 as unknown as Record<string, unknown>,
    niceGuide22 as unknown as Record<string, unknown>,
    niceGuide23 as unknown as Record<string, unknown>,
    niceGuide24 as unknown as Record<string, unknown>,
    niceGuide25 as unknown as Record<string, unknown>,
    niceGuide26 as unknown as Record<string, unknown>,
    niceGuide27 as unknown as Record<string, unknown>,
    niceGuide28 as unknown as Record<string, unknown>,
    niceGuide29 as unknown as Record<string, unknown>,
    niceGuide30 as unknown as Record<string, unknown>,
    niceGuide31 as unknown as Record<string, unknown>,
    niceGuide32 as unknown as Record<string, unknown>,
    niceGuide33 as unknown as Record<string, unknown>,
    niceGuide34 as unknown as Record<string, unknown>,
    niceGuide35 as unknown as Record<string, unknown>,
    niceGuide36 as unknown as Record<string, unknown>,
    niceGuide37 as unknown as Record<string, unknown>,
    niceGuide38 as unknown as Record<string, unknown>,
    niceGuide39 as unknown as Record<string, unknown>,
    niceGuide40 as unknown as Record<string, unknown>,
    niceGuide41 as unknown as Record<string, unknown>,
    niceGuide42 as unknown as Record<string, unknown>,
    niceGuide43 as unknown as Record<string, unknown>,
    niceGuide44 as unknown as Record<string, unknown>,
    niceGuide45 as unknown as Record<string, unknown>,
    niceGuide46 as unknown as Record<string, unknown>,
    niceGuide47 as unknown as Record<string, unknown>,
    niceGuide48 as unknown as Record<string, unknown>,
    niceGuide49 as unknown as Record<string, unknown>,
    niceGuide50 as unknown as Record<string, unknown>,
    niceGuide51 as unknown as Record<string, unknown>,
    niceGuide52 as unknown as Record<string, unknown>,
    niceGuide53 as unknown as Record<string, unknown>,
    niceGuide54 as unknown as Record<string, unknown>,
    niceGuide55 as unknown as Record<string, unknown>,
    niceGuide56 as unknown as Record<string, unknown>,
    niceGuide57 as unknown as Record<string, unknown>,
  ],
};

const CITY_ORDER = [
  'paris', 'amiens', 'lille', 'mont-saint-michel', 'tours', 'bordeaux',
  'toulouse', 'lyon', 'marseille', 'strasbourg', 'nice',
];

export const EncyclopediaView: React.FC<EncyclopediaViewProps> = ({ progress, onNavigateToFlashcards }) => {
  const [selectedCityId, setSelectedCityId] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<Record<string, unknown> | null>(null);

  const journey = progress.activeJourney;
  // Fase 2 (pós-trilha): liberada para o administrador (autoria/revisão) ou ao
  // concluir TODAS as 11 cidades da aventura.
  const isUnlocked = isEncyclopediaUnlocked(progress);

  const journeyProgress = journey
    ? Math.min(journey.currentStepIndex + 1, journey.citySequence.length)
    : 0;
  const journeyTotal = journey ? journey.citySequence.length : 11;

  // Leitor de seção (reusa o LessonReader das aulas)
  if (activeSection) {
    return (
      <LessonReader
        onBack={() => setActiveSection(null)}
        onNavigateToFlashcards={onNavigateToFlashcards}
        lessonData={activeSection as never}
      />
    );
  }

  // Detalhe da cidade: lista de seções do dossiê
  if (selectedCityId) {
    const city = FRANCE_CITIES.find((c) => c.id === selectedCityId);
    const sections = CITY_GUIDES[selectedCityId] || [];
    return (
      <div className="max-w-5xl mx-auto p-6 space-y-6 select-none">
        <button
          onClick={() => setSelectedCityId(null)}
          className="flex items-center space-x-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Voltar à Enciclopédia</span>
        </button>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center space-x-2 text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                <Landmark className="w-4 h-4" />
                <span>Dossiê da cidade</span>
              </div>
              <h1 className="text-2xl font-black text-white mt-1">{city?.name || selectedCityId}</h1>
              <p className="text-sm text-slate-400 mt-1">
                {sections.length} seções temáticas · níveis A1 a C2
              </p>
            </div>
          </div>

          <div className="grid gap-3 pt-2">
            {sections.map((section, idx) => {
              const titleFr = (section.titleFr as string) || `Section ${idx + 1}`;
              const titlePt = (section.titlePt as string) || '';
              const paragraphs = (section.paragraphs as Array<{ fr: string; pt: string }>) || [];
              const vocab = (section.vocabularyDictionary as Array<unknown>) || [];
              const level = (section.level as string) || '';
              return (
                <button
                  key={(section.id as string) || idx}
                  onClick={() => setActiveSection(section)}
                  className="group flex items-center justify-between p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-emerald-700 hover:bg-slate-900 transition-all text-left"
                >
                  <div className="flex items-start space-x-3">
                    <div className="mt-0.5 w-9 h-9 rounded-xl bg-emerald-950/70 border border-emerald-800/50 flex items-center justify-center text-emerald-400 shrink-0">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {idx + 1}. {titleFr}
                      </p>
                      {titlePt && <p className="text-xs text-slate-400 mt-0.5">{titlePt}</p>}
                      <div className="flex items-center gap-2 mt-1.5">
                        {level && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-amber-950/60 border border-amber-800/40 text-[10px] font-bold text-amber-300 uppercase tracking-wide">
                            {level}
                          </span>
                        )}
                        <span className="text-[11px] text-slate-500">
                          {paragraphs.length} parágrafos · {vocab.length} expressões-chave
                        </span>
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 transition-colors shrink-0" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Mantido como fallback caso o desbloqueio administrativo seja revertido.
  if (!isUnlocked) {
    return (
      <div className="max-w-5xl mx-auto p-6 select-none">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 flex flex-col items-center text-center space-y-5">
          <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center">
            <Lock className="w-7 h-7 text-slate-500" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-white">Enciclopédia da França</h1>
            <p className="text-sm text-slate-400 mt-2 max-w-lg">
              Ao terminar a trilha de Irlan, você desbloqueia os dossiês das 11 cidades:
              história, cultura, gastronomia, esporte e vida cotidiana — com todo o
              vocabulário do banco, dos níveis A1 ao C2.
            </p>
          </div>

          <div className="w-full max-w-md">
            <div className="flex justify-between text-[11px] font-semibold text-slate-400 mb-1.5">
              <span className="flex items-center space-x-1">
                <Compass className="w-3.5 h-3.5 text-emerald-400" />
                <span>Progresso da trilha</span>
              </span>
              <span>{journeyProgress} de {journeyTotal} paradas</span>
            </div>
            <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all"
                style={{ width: `${Math.round((journeyProgress / journeyTotal) * 100)}%` }}
              />
            </div>
            <p className="text-xs text-slate-500 mt-3">
              Complete a aventura de Irlan (A1 → C2) para abrir a Enciclopédia.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Grade das 11 cidades
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6 select-none">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Fase 2 · pós-trilha</span>
          </div>
          <h1 className="text-2xl font-black text-white mt-1">Enciclopédia da França</h1>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl">
            Dossiês das 11 cidades: história, patrimônio, gastronomia, esporte e vida
            cotidiana. Textos ricos em vocabulário A1–C2, com todas as palavras clicáveis.
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {CITY_ORDER.map((cityId) => {
          const city = FRANCE_CITIES.find((c) => c.id === cityId);
          const sections = CITY_GUIDES[cityId];
          const isAvailable = !!sections && sections.length > 0;
          return (
            <button
              key={cityId}
              disabled={!isAvailable}
              onClick={() => setSelectedCityId(cityId)}
              className={`group relative overflow-hidden rounded-2xl border p-5 text-left transition-all ${
                isAvailable
                  ? 'bg-slate-900 border-slate-800 hover:border-emerald-700 hover:bg-slate-900/70'
                  : 'bg-slate-950/60 border-slate-800/60 cursor-not-allowed'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                    isAvailable
                      ? 'bg-emerald-950/70 border border-emerald-800/50 text-emerald-400'
                      : 'bg-slate-900 border border-slate-800 text-slate-600'
                  }`}>
                    {isAvailable ? <Landmark className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white capitalize">{city?.name || cityId}</p>
                    <p className="text-[11px] text-slate-500">
                      {isAvailable
                        ? `${sections.length} seções · ${city?.region || ''}`
                        : 'Dossiê em breve'}
                    </p>
                  </div>
                </div>
                {isAvailable && (
                  <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 transition-colors" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex items-center space-x-2 text-[11px] text-slate-500 pt-2">
        <MapPin className="w-3.5 h-3.5" />
        <span>Novos dossiês são adicionados cidade por cidade.</span>
      </div>
    </div>
  );
};
