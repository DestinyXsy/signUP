# ����������ʱ��ֹ�ű�
set -e
# ����
npm run build
# cd �����������Ŀ¼�� 
cd dist
git init
git add -A
git commit -m 'start'
# ���� https://<github�û���>.github.io/<�ֿ���>
git push -f git@github.com:DestinyXsy/signUP.git develop:gh-pages
cd -
