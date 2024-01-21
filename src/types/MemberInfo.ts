export interface MemberInfo {
  memberId: string,
  name: string,
  profileImageUrl: string,
  status: string
}

export interface Pagination {
  hasNext: boolean;
  totalCount: number;
  page: number;
  size: number;
}

export interface MemberResponse {
  code: string,
  message: string,
  data: MemberInfo,
  pagination: Pagination;
}
