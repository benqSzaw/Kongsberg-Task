export interface ApiType {
  numFound: number;
  start: number;
  numFoundExact: boolean;
  docs: Doc[];
  num_found: number;
  q: string;
  offset: null | number;
}

export interface Doc {
  key: string;
  type: string;
  seed: string[];
  title: string;
  title_suggest: string;
  title_sort: string;
  edition_count: number;
  edition_key: string[];
  publish_date: string[];
  publish_year: number[];
  first_publish_year: number;
  number_of_pages_median: number;
  lccn?: string[];
  publish_place?: string[];
  oclc?: string[];
  lcc?: string[];
  isbn?: string[];
  last_modified_i: number;
  ebook_count_i: number;
  ebook_access: string;
  has_fulltext: boolean;
  public_scan_b: boolean;
  ia?: string[];
  ia_collection?: string[];
  ia_collection_s?: string;
  lending_edition_s?: string;
  lending_identifier_s?: string;
  printdisabled_s?: string;
  ratings_count_1?: number;
  ratings_count_2?: number;
  ratings_count_3?: number;
  ratings_count_4?: number;
  ratings_count_5?: number;
  ratings_average?: number;
  ratings_sortable?: number;
  ratings_count?: number;
  readinglog_count: number;
  want_to_read_count: number;
  currently_reading_count: number;
  already_read_count: number;
  cover_edition_key?: string;
  cover_i?: number;
  publisher: string[];
  language: string[];
  author_key: string[];
  author_name: string[];
  author_alternative_name?: string[];
  subject?: string[];
  id_goodreads?: string[];
  id_librarything?: string[];
  ia_box_id?: string[];
  publisher_facet: string[];
  subject_facet?: string[];
  _version_: number;
  lcc_sort?: string;
  author_facet: string[];
  subject_key?: string[];
  contributor?: string[];
  ddc?: string[];
  person?: string[];
  place?: string[];
  time?: string[];
  id_amazon?: string[];
  id_overdrive?: string[];
  person_key?: string[];
  place_key?: string[];
  time_facet?: string[];
  person_facet?: string[];
  place_facet?: string[];
  ddc_sort?: string;
  time_key?: string[];
  first_sentence?: string[];
  ia_loaded_id?: string[];
  subtitle?: string;
  id_dnb?: string[];
  id_librivox?: string[];
  id_project_gutenberg?: string[];
  id_alibris_id?: string[];
  id_better_world_books?: string[];
  id_depósito_legal?: string[];
  id_google?: string[];
  id_isfdb?: string[];
  id_standard_ebooks?: string[];
  id_wikidata?: string[];
}

export interface AuthorData {
  type: TypeOrAuthor;
  title: string;
  subjects?: string[] | null;
  subject_places?: string[] | null;
  subject_times?: string[] | null;
  authors?: AuthorsEntity[] | null;
  covers?: number[] | null;
  key: string;
  latest_revision: number;
  revision: number;
  created: CreatedOrLastModified;
  last_modified: CreatedOrLastModified;
}
interface TypeOrAuthor {
  key: string;
}
interface AuthorsEntity {
  type: TypeOrAuthor;
  author: TypeOrAuthor;
}
interface CreatedOrLastModified {
  type: string;
  value: string;
}
