export interface ICertificationsList {
  certifications: ICertifications;
}

interface ICertifications {
  US: ICertification[];
  CA: ICertification[];
  AU: ICertification[];
  DE: ICertification[];
  FR: ICertification[];
  NZ: ICertification[];
  IN: ICertification[];
  GB: ICertification[];
  NL: ICertification[];
  BR: ICertification[];
  FI: ICertification[];
  BG: ICertification[];
  ES: ICertification[];
  PH: ICertification[];
  PT: ICertification[];
}

export interface ICertification {
  certification: string;
  meaning: string;
  order: number;
}
