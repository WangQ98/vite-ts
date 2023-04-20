export interface RequestOptions {
  // 是否处理请求结果
  isTransformResponse?: boolean;
}

export interface Result<T = any> {
  code: number;
  msg: string;
  data: T;
}
