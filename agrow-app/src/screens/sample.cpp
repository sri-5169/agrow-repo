#include <bits/stdc++.h>
using namespace std;
#define ll long long
#define dd double
#define endl "\n"
#define pb push_back
#define all(v) v.begin(), v.end()
#define mp make_pair
#define fi first
#define se second
#define vll vector<ll>
#define pll pair<ll, ll>
#define fo(i, n) for (int i = 0; i < n; i++)
#define fo1(i, n) for (int i = 1; i <= n; i++)
ll mod = 1000000007;
ll n, k, t, m, q, flag = 0;
ll power(ll a, ll b);
ll min(ll a, ll b);
ll max(ll a, ll b);
ll gcd(ll a, ll b);
int main()
{
    vector<int> v(256,1);
    n = 256;
    for(int i=0;i<n;i++){
        int count = 0;
        int j=0;
        
        bool flag=false;
        while(j<n){
            if(v[j]==1) flag = !flag;
            if(v[j]==1 &&  flag==true){
                flag = !flag;
                v[j] = 0;
            }
            j++;
        }
        for(int k=0;k<n;k++){
            if(v[k]==1) count++;
        }
        if(count==1) break;
        flag = false;
        while(j>=0){
            if(v[j]==1) flag = !flag;
            if(v[j]==1 &&  flag==true){
                flag = !flag;
                v[j] = 0;
            }
            j--;
        }
        count=0;
        for(int k=0;k<n;k++){
            if(v[k]==1) count++;
        }
        if(count==1) break;
    }
    for(int i=0;i<n;i++){
        if(v[i]==1) cout << i+1 << endl;
    }
    return 0;
}
ll power(ll a, ll b)
{
    ll res = 1;
    a %= mod;
    assert(b >= 0);
    for (; b; b >>= 1)
    {
        if (b & 1)
            res = res * a % mod;
        a = a * a % mod;
    }
    return res;
}
ll min(ll a, ll b)
{
    if (a > b)
        return b;
    else
        return a;
}
ll max(ll a, ll b)
{
    if (a > b)
        return a;
    else
        return b;
}
ll gcd(ll a, ll b)
{
    if (b > a)
        return gcd(b, a);
    if (b == 0)
        return a;
    return gcd(b, a % b);
}