# 한양여대 항공과 홍보 블로그 (GitHub Pages)

학생 친화적인 한양여자대학교 항공과 홍보 사이트입니다. **GitHub Pages + Jekyll**로 운영되며 호스팅 비용은 **0원**입니다.

## 주요 기능
- 탑승권(Boarding Pass) 디자인의 입시 D-day 카드 (`_config.yml`에서 날짜만 바꾸면 자동 계산)
- 숫자 카운트업 학과 자랑
- 클릭형 교육과정 탭 (객실 / 운송·공항 / 관광)
- 자격증 "여권 스탬프" 모으기
- 4문항 "나에게 맞는 항공 직무" 테스트
- 교수진 소개, 입시 FAQ
- 블로그형 학과 소식 (`_posts` 폴더에 마크다운 파일만 추가)
- 모바일 반응형

## 배포 방법 (10분)
1. GitHub 가입 후 **New repository** 생성
   - 이름을 `아이디.github.io` 로 하면 주소가 `https://아이디.github.io` 가 됩니다.
   - 다른 이름(예: `hywu-aviation`)이면 `_config.yml`의 `baseurl`을 `"/hywu-aviation"`으로 바꿔주세요.
2. 이 폴더의 파일 전체를 저장소에 업로드 (**Add file > Upload files**에서 드래그)
3. 저장소 **Settings > Pages** 에서 Source를 **Deploy from a branch**, Branch를 **main / (root)** 로 저장
4. 1~2분 뒤 사이트 주소가 Pages 화면 상단에 표시됩니다.

## 운영 팁
- **새 소식 올리기**: `_posts/YYYY-MM-DD-영문제목.md` 파일 추가 (예시 글 `2026-11-01-how-to-write-a-post.md` 참고)
- **사진**: `assets/img`에 업로드 후 글 머리말에 `image: /assets/img/파일명.jpg`
- **SNS 링크**: `_config.yml`의 `instagram`, `youtube` 입력 시 푸터에 자동 표시
- **입시 일정 변경**: `_config.yml`의 `dday` 항목만 수정
- **학과 공동 관리**: 저장소 Settings > Collaborators에서 학생기자단을 초대하면 함께 글을 올릴 수 있어요.
- **도메인(선택)**: 원하면 연 1~2만원대 도메인을 사서 Settings > Pages > Custom domain에 연결 가능

## 콘텐츠 출처 / 주의
학과 수치, 교육과정, 자격증, 교수진은 한양여대 공식 학과소개 페이지(https://www.hywoman.ac.kr/dept/airlineservice.html), 입시 일정은 2027학년도 입학전형 시행계획 기준입니다. 공식 사이트가 아닌 홍보용이므로 학과의 승인을 받고, 학교 로고·사진은 사용 허락을 받은 뒤 넣어주세요.

## 로컬 미리보기 (선택)
```
bundle install
bundle exec jekyll serve
```
