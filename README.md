# 캐글심장질환 데이터를 활용한 건강상태 예측 서비스

=====

## 광주인공지능사관학교 3기 1차 프로젝트 (ML Pipeline 구축)

1. 작업상세

   - 작업기간: 3주
   - 작업인원: 4인

2. 사용기술

   - backend: python 3.8+ - Flask
   - Frontend: HTML5, CSS3, JavaScript, Jquery
   - Machine learning: Python3.8+ - Scikit-learn

3. Preprocessing

- 도메인 지식 습득 후 각 피쳐의 상관관계 분석, 불필요 데이터 제거 및 결합
- F1스코어를 측정하여 데이터의 불균형을 확인
- 데이터의 불균형을 해소하기 위해서 SMOTEENN 기법을 사용하여 불균형 해소.
- GridSearch CV를 사용하여 최적의 파라미터 값 추출
- XGBoost, RandomForest, Ensemble등 여러 기법중에 가장 정확도가 높았던 모델을 채택

4. 실행방법 (on jupyter notebook)

- 차례대로 실행을 누르고 [http](http://localhost:5000)로 접속한다.
- 문진 순서에 따라서 문진을 하고 결과 확인을 클릭.
- 초록색과 빨간색의 갯수에 따라 빨간색이 3개 이상이면 빠른 시일 내에 가까운 병원 방문 요망
