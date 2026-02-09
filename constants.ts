
import { Experience, HauntedDoll } from './types';

export const COLORS = {
  CHARCOAL: '#0B0F12',
  TEAL_FOG: '#1F2E33',
  OFF_WHITE: '#E6E8EA',
  CRIMSON: '#8E1B1B',
  RUST: '#B12A2A',
};

export const CONTACT_INFO = {
  PHONE: '(913) 205-9775',
  EMAIL_MAIN: '1322Houseofthedead@gmail.com',
  EMAIL_ALT: 'UHaunted@gmail.com',
  ADDRESS: '1322 Maple Street, Atchison, Kansas 66062',
};

export const EXPERIENCES: Experience[] = [
  {
    id: 'psychomanteum',
    title: 'THE PSYCHOMANTEUM',
    description: 'A darkened chamber designed to encourage visions and contact with the spirit world.',
    longDescription: 'Inspired by the work of Dr. Raymond Moody, the Psychomanteum is a darkened chamber designed to encourage visions and contact with the spirit world.\n\nVisitors sit alone in near-total darkness, gazing into reflective blackness illuminated only by candlelight. This practice traces its roots to the ancient Greek Necromanteion, where seekers attempted to communicate with the dead.\n\nSome report seeing faces. Some hear voices. Others leave shaken, unable to explain what they experienced.',
    imageUrl: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'deprivation',
    title: 'HAUNTED DEPRIVATION CHAMBER',
    description: 'Strips away light, sound, and orientation — leaving only darkness and your thoughts.',
    longDescription: 'Welcome to your nightmare.\n\nThe Haunted Deprivation Chamber strips away light, sound, and orientation — leaving only darkness and your thoughts. In this void, guests report whispers, touches, and voices that seem to come from nowhere.\n\nThis experience is not for the faint of heart.',
    imageUrl: 'https://images.unsplash.com/photo-1519074063912-ad2d602159d7?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'faces',
    title: 'FACES OF THE DEAD ROOM',
    description: 'The dead reveal themselves. Faces emerge. Voices surround you.',
    longDescription: 'Welcome to your personal nightmare.\n\nIn this room, the dead reveal themselves. Faces emerge. Voices surround you. The line between imagination and reality blurs as the darkness closes in.\n\nMany guests leave early. Some refuse to speak afterward.',
    imageUrl: 'https://images.unsplash.com/photo-1461696114087-397271a7aedc?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'doll-room',
    title: 'HAUNTED DOLL ROOM',
    description: 'Home to multiple haunted artifacts that refuse to stay still.',
    longDescription: 'The Doll Room houses objects that have been donated or recovered from locations with intense paranormal history. These items are not mere playthings; they are containers for energy that refuses to dissipate.',
    imageUrl: 'https://images.unsplash.com/photo-1531147646552-1eec68116469?auto=format&fit=crop&q=80&w=1000',
  }
];

export const HAUNTED_DOLLS: HauntedDoll[] = [
  {
    id: 'dirty-gerty',
    name: 'DIRTY GERTY',
    description: 'One of the most haunted dolls in the United States.',
    longDescription: 'Dirty Gerty is widely regarded as one of the most haunted dolls in the United States. Guests report sudden movement, cold spots, whispers, and overwhelming feelings of dread.\n\nShe is not a prop. She is not a replica. And she is not alone.',
    imageUrl: 'https://images.unsplash.com/photo-1543329064-904c965e6eb4?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'rosemary',
    name: 'ROSEMARY',
    description: 'A presence felt rather than seen.',
    longDescription: 'Very little is known about Rosemary. Guests report intense sadness, pressure in the chest, and the sensation of being watched closely when near her.\n\nSome spirits do not want their stories told.',
    imageUrl: 'https://images.unsplash.com/photo-1528659518398-a3203417730e?auto=format&fit=crop&q=80&w=800',
  }
];
