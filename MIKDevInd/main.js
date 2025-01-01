import { TextInputRecommen } from './js/TextInputRecommen.js';
import { DataTable } from './js/DataTable.js';
import { ImageZoom } from './js/ImageZoom.js';

const MIKDevInd = {
  TextInputRecommen,
  DataTable,
  ImageZoom,
};

// Ekspos ke global window agar bisa digunakan di HTML
window.MIKDevInd = MIKDevInd;